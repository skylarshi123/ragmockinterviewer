// File: app/api/chat/route.ts
import { NextResponse, NextRequest } from 'next/server';
import OpenAI from 'openai';
import { OpenAIEmbeddings } from '@langchain/openai';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
// import { Document } from 'langchain/document';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

// Types
interface ChatMessage {
    role: string;
    content: string;
}

interface ChatRequest {
    messages: ChatMessage[];
    code: string;
}

// Algorithm patterns and strategies knowledge base
const algorithmicPatterns = [
    `Dynamic Programming Pattern:
    Key Concepts:
    1. Optimal Substructure: Problem can be broken down into smaller subproblems
    2. Overlapping Subproblems: Same subproblems are encountered multiple times
    
    Common Approaches:
    1. Top-down (Memoization):
       - Start with the main problem
       - Break it down recursively
       - Cache results to avoid recomputation
    
    2. Bottom-up (Tabulation):
       - Start with smallest subproblems
       - Build up to larger problems
       - Store results in a table
    
    Implementation Tips:
    - Identify state variables
    - Define recurrence relation
    - Handle base cases
    - Consider space optimization`,

    `Sliding Window Pattern:
    Key Concepts:
    1. Fixed Window: Window size remains constant
    2. Dynamic Window: Window size changes based on conditions
    
    Implementation Steps:
    1. Initialize window pointers (start, end)
    2. Expand window (add elements)
    3. Contract window (remove elements)
    4. Update result during window movements
    
    Common Applications:
    - Substring problems
    - Array contiguous sequences
    - Stream processing`,

    `Two Pointers Pattern:
    Types:
    1. Same Direction: Both pointers move forward
    2. Opposite Direction: Pointers move toward each other
    
    Common Applications:
    - Array manipulation
    - Linked list operations
    - String processing
    
    Implementation Tips:
    - Initialize pointers strategically
    - Define movement conditions
    - Handle edge cases`,

    `Graph Traversal Patterns:
    Key Approaches:
    1. Depth-First Search (DFS):
       - Uses stack (recursive or explicit)
       - Explores as far as possible
       - Backtracking when needed
    
    2. Breadth-First Search (BFS):
       - Uses queue
       - Explores level by level
       - Shortest path in unweighted graphs
    
    Implementation Tips:
    - Track visited nodes
    - Handle cycles
    - Consider space complexity`,

    `Binary Search Pattern:
    Key Concepts:
    1. Search Space: Sorted or monotonic
    2. Midpoint Calculation
    3. Condition Evaluation
    
    Implementation Tips:
    - Handle boundary conditions
    - Avoid integer overflow
    - Consider inclusive vs exclusive ranges
    
    Variations:
    - Finding exact match
    - Finding insertion point
    - Finding range boundaries`,

    `Backtracking Pattern:
    Key Concepts:
    1. Decision Space: All possible choices
    2. Constraints: Valid state conditions
    3. Goal State: Final solution criteria
    
    Implementation Steps:
    1. Choose: Make a decision
    2. Explore: Recurse with new state
    3. Unchoose: Undo decision
    
    Optimization Tips:
    - Prune invalid paths early
    - Order choices efficiently
    - Consider state representation`
];

// Your existing system prompt
const systemPrompt = `# LeetCode Interviewer Chatbot System Prompt

You are an AI-powered chatbot designed to simulate an experienced technical interviewer specializing in LeetCode-style coding questions. Your role is to guide candidates through coding interviews, assess their problem-solving skills, and provide constructive feedback. Follow these guidelines in your interactions:

1. Interview Structure:
   - Start by introducing a LeetCode-style problem to the candidate.
   - Ask probing questions to understand the candidate's thought process.
   - Provide hints or clarifications if the candidate struggles, but avoid giving away the solution.
   - Evaluate the candidate's solution and offer constructive feedback.
   - Discuss time and space complexity of the solution.
   - Explore potential optimizations or alternative approaches.

2. Tone and Communication:
   - Maintain a professional, encouraging, and patient demeanor.
   - Use clear, concise language to explain concepts or provide feedback.
   - Be supportive but also challenge the candidate to think critically.
   - Avoid being overly critical or dismissive of incorrect answers.

3. Technical Expertise:
   - Demonstrate deep knowledge of data structures, algorithms, and coding best practices.
   - Be prepared to discuss various problem-solving approaches and their trade-offs.
   - Provide accurate information about time and space complexity.
   - If unsure about a specific technical detail, acknowledge it honestly.

4. Adaptability:
   - Adjust the difficulty of questions and hints based on the candidate's performance.
   - If a candidate is struggling, break down the problem into smaller, manageable steps.
   - For strong candidates, introduce follow-up questions or ask about edge cases to further challenge them.

5. Feedback and Guidance:
   - Offer specific, actionable feedback on the candidate's approach and code.
   - Highlight both strengths and areas for improvement in the candidate's performance.
   - Provide resources or suggestions for further learning when appropriate.

6. Code Evaluation:
   - Ask the candidate to explain their code and thought process.
   - Point out any syntax errors or logical flaws in the code.
   - Discuss code readability, efficiency, and best practices.

7. Problem Types:
   - Be prepared to cover a wide range of LeetCode-style questions, including but not limited to:
     - Array manipulation
     - String processing
     - Linked Lists
     - Trees and Graphs
     - Dynamic Programming
     - Sorting and Searching algorithms
     - Hash tables
     - Stack and Queue implementations

8. Ethical Considerations:
   - Do not provide or ask for any personal information.
   - Maintain fairness and avoid any form of bias in your evaluations.
   - Focus on the candidate's problem-solving skills and coding ability, not memorization of specific solutions.

9. Iteratively giving help:
   - Don't give solution until the user gives up, keep suggesting hints without offering code
   - Question the user's thought process just like a real interview don't give the answer away
   - **LET THE USER COME UP WITH THE IDEAS THEMSELVES, DONT JUST GIVE THEM THE APPROACH

Remember, your goal is to create a realistic and educational interview experience that helps candidates improve their coding skills and prepare for actual technical interviews.`;

// Initialize vector store (do this outside the handler to maintain state between requests)
let vectorStore: MemoryVectorStore | null = null;

async function initializeVectorStore() {
    if (vectorStore) return; // Only initialize once

    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
    });

    const docs = await textSplitter.createDocuments(algorithmicPatterns);
    const embeddings = new OpenAIEmbeddings();
    vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
}

async function getRelevantPatterns(query: string): Promise<string> {
    if (!vectorStore) {
        throw new Error('Vector store not initialized');
    }
    
    const similarDocs = await vectorStore.similaritySearch(query, 2);
    return similarDocs.map(doc => doc.pageContent).join('\n\n');
}

export async function POST(req: NextRequest) {
    try {
        const openai = new OpenAI();
        const { messages, code } = await req.json() as ChatRequest;
        const problemDetails = messages[0].content;

        // Initialize vector store if not already done
        await initializeVectorStore();

        // Get the latest message to find relevant patterns
        const latestMessage = messages[messages.length - 1].content;
        const relevantPatterns = await getRelevantPatterns(latestMessage);

        // Enhance system prompt with retrieved patterns
        const enhancedPrompt = `${systemPrompt}\n\nRelevant algorithmic patterns to consider:\n${relevantPatterns}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: enhancedPrompt },
                { role: "user", content: `Here's the problem we'll be discussing: ${problemDetails}` },
                ...messages.slice(1),
                { role: "user", content: `Current code in the editor:\n\`\`\`\n${code}\n\`\`\`` },
            ],
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                const encoder = new TextEncoder();
                try {
                    for await (const chunk of completion) {
                        const content = chunk.choices[0]?.delta?.content;
                        if (content) {
                            const text = encoder.encode(content);
                            controller.enqueue(text);
                        }
                    }
                } catch (err) {
                    console.error(err);
                    controller.error(err);
                } finally {
                    controller.close();
                }
            }
        });

        return new NextResponse(stream);
    } catch (error) {
        console.error('Error in chat route:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}