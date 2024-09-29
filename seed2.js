import admin from 'firebase-admin';

const initializeApp = async () => {
  const serviceAccount = {
      "type": "service_account",
      "project_id": "ragmockinterviewer",
      "private_key_id": "9d01501846f235b5e2497ec451377cc8ee0598ce",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbHX1hSOHEwN4h\nbgJPDHXXchxWPjvinlbfEqioQy2gArxx7qVyouM/Hpet/X820gHtrqWSw5uaiLgi\noNmT0ul4a/k3tod9yaQMkl4uGRPmoTW5GY2z3MCArA1KfEDGUviaYRqr3nzWHkWB\n/k3Lvz1uuCJV6ETCfX1lgswzd5IehAeBqGIrUPUV4/onQyH6DsmDuqDeLm4k6d1E\nzF97mXBqqel0wkZHNtL/LGfWeCFBhsLiVPDCWPUPnsi56DxntuE6k4dXf97IRin6\nVhvuM35EhzJF30YBC5923QmH7UJSnGdA9qla4mFt0C/ttlHNGbA5mTCKLxtxGzy9\naa827ohHAgMBAAECggEADHCurdIjpfY7RlOcGZ0qqEToG0oPlVdfCu2Lb3jXmMuU\nTmBPEA9JGUwlLsbYglDHCkBi/Hj9lyGnA/704MHV6TUxd4/LPoGEaQWlsjal8hn6\nAQcp4T8pxhm+lsQvhfME/qLVDv1Ol3YthRVemQWZDnWxgVtyt/DEU09AmmAcsX27\njmbtSLo8NEGEVEagmPrBtx83Q4S3HbKBaxJsWS7J7aizhXHcC7mHHsxTlHFRHM7q\nnLR7eEd4m97THgl6mcWJjSIutWponhfmbhBMm1PQwjPictKgPxQrcYECNyDRkWqY\nLSYs0RvT46wXJc2ZysaE8CNvZPd7iPoKxfUjzxPY/QKBgQD6HlyWTuRf0wJ7b/l1\nf4b1L7NxAw/nfuNltycpo/47QAqJuQGXulDSXN7Ij75HtqD85OtkQUvn0b06zBDM\nK4SajA56CPLr2Xij3ooqicHm+D7fRMCxn/0W0n11T41pQIpLt8Eh9ajjGSjQTMFN\nUp6KKEHAB9HH+fj9RQw4cpz7awKBgQDgRH85bcFRMadaA1QGkTX2/WB/4RVgpyzQ\n6Pe7aeGD9ajAxK6iK/aPWjPdQnelrir+VIgkY5W+4yuksGUacevNBFV5lSf1BQk7\nEj2I0P7P7pxJUs4TpfqgJh0ooLLSI8yH9lm1ojUaDVSm232GcSvf1Uw759I+Ozmc\no6irPHhZlQKBgEPuyybn9o8wOJReLVsEcBtYAVzIgCFYDVsrC6/7oqllE3ekkBIt\nwJXiM4A1ynCf4cnOQ0DPm1YzWToHAujxSOrQ732lwJTeVC3t24kCMXASLMFnYw7b\nbVotgXXDTZ0wsl8uYX5fwqcrxjINJtNhhT3xASqu9QNjmYTwpAkQ2CJRAoGBANHU\nhMywuj1DnfcEQiva1YkATLeZWy0RfUcBkjgRuuSChp/F5jbpt0ks9nXAaL3llWhc\novyZCFSPrBfsysvRZvRtZ6PYQIhpa9ePG2/VS3Q1JpkcFqAfnb0VrBaFNIqU4Bse\nDZV57QExE9ECcBHH9Wr54Nfz8Kw1MZQzM+7zJw95AoGBAO112VxTPOqY8vmSdFRr\nd8NJT0Dpb6yVfCs9t/l7QpoAiXwB3BAQcRjHpqJgUsW2zlFmUHDFajhHDpiXMtVg\n9t7p99edcK5PS1R1wbNpHo8JISl0Gr3/M3OTmIs8Mvkkr/F8degZ+lrp/wGP45T0\nYyfvGJDfAErHyOfev3B8tGt0\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-1sjho@ragmockinterviewer.iam.gserviceaccount.com",
      "client_id": "105900234375701696107",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1sjho%40ragmockinterviewer.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();

  try {
    await db.collection('users').doc('user_id').set({
      name: 'b',
      age: 0,
      city: 'Los '
    });
    console.log('eureka!');
  } catch (error) {
    console.error('Error:', error);
  }
};

initializeApp();