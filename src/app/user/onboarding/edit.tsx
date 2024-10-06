"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { updatePreferences } from "./actions";
import { useRouter } from "next/navigation";

// Define a type for the topics
type Topic =
  | "arrays_and_hashing"
  | "two_pointers"
  | "stack"
  | "binary_search"
  | "sliding_window"
  | "linked_list"
  | "trees"
  | "tries"
  | "backtracking"
  | "heap_priority_queue"
  | "graphs"
  | "1d_dynamic_programming"
  | "intervals"
  | "greedy"
  | "advanced_graphs"
  | "2d_dynamic_programming"
  | "bit_manipulation"
  | "math_and_geometry";

const topics: Topic[] = [
  "arrays_and_hashing",
  "two_pointers",
  "stack",
  "binary_search",
  "sliding_window",
  "linked_list",
  "trees",
  "tries",
  "backtracking",
  "heap_priority_queue",
  "graphs",
  "1d_dynamic_programming",
  "intervals",
  "greedy",
  "advanced_graphs",
  "2d_dynamic_programming",
  "bit_manipulation",
  "math_and_geometry",
];

interface EditPreferencesProps {
  initialPreferences: Topic[];
  userId: string;
}

export function EditPreferences({
  initialPreferences,
  userId,
}: EditPreferencesProps) {
  const [preferences, setPreferences] = useState<Topic[]>(initialPreferences);
  const router = useRouter();

  const togglePreference = (topic: Topic) => {
    setPreferences((prev) =>
      prev.includes(topic) ? prev.filter((p) => p !== topic) : [...prev, topic]
    );
  };

  const handleSave = async () => {
    if (preferences.length === 0) {
      alert("Please select at least one preference.");
      return;
    }

    const result = await updatePreferences(userId, preferences);
    if (result.success) {
      alert("Your preferences have been updated.");
      router.push("/user/dashboard");
    } else {
      alert("Failed to update preferences. Please try again.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <div key={topic} className="flex items-center space-x-2">
            <Checkbox
              id={topic}
              checked={preferences.includes(topic)}
              onCheckedChange={() => togglePreference(topic)}
            />
            <Label
              htmlFor={topic}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {topic}
            </Label>
          </div>
        ))}
      </div>
      <Button onClick={handleSave} className="w-full">
        Save Preferences
      </Button>
    </div>
  );
}
