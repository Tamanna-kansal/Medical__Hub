import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const blogPosts = {
  1: {
    title: '5 Daily Habits for a Healthier Heart',
    date: 'April 14, 2025',
    author: 'Dr. Ananya Mehta',
    content: [
      "Your heart works tirelessly, every minute of every day. Taking care of it doesn’t have to be complicated. Here are five science-backed daily habits that can strengthen your heart and improve your overall well-being.",
      "1. Eat a Balanced Diet: A heart-friendly diet is rich in fruits, vegetables, whole grains, lean proteins, and healthy fats like omega-3. Avoid trans fats, excessive salt, and processed sugars.",
      "2. Stay Physically Active: At least 30 minutes of moderate exercise helps keep your blood pressure in check, reduces bad cholesterol, and boosts circulation.",
      "3. Prioritize Quality Sleep: Aim for 7-9 hours of restful sleep per night. Good sleep helps regulate blood pressure and reduces risk of heart conditions.",
      "4. Say No to Smoking: Smoking damages your heart and arteries. Quitting smoking brings both immediate and long-term benefits.",
      "5. Manage Stress: Incorporate habits like meditation, deep breathing, or light walking to reduce daily stress and improve heart health."
    ]
  },
 
  2: {
    title: 'Boost Your Immunity Naturally',
    date: 'April 10, 2025',
    author: 'Dr. Meera Kapoor',
    content: [
      "In today’s fast-paced world, a strong immune system is essential. While there's no magic pill, healthy habits can naturally strengthen your immunity.",
      "1. Load up on Vitamin C and Zinc through citrus fruits, leafy greens, and nuts.",
      "2. Stay hydrated — water helps flush out toxins and keeps your cells active.",
      "3. Get consistent sleep. 7-8 hours every night allows your body to repair.",
      "4. Include probiotics like yogurt or fermented foods to boost gut health.",
      "5. Manage stress with meditation, breathwork, or light activity — chronic stress weakens immune response."
    ]
  },
  3: {
    title: 'Understanding Mental Health: Early Signs & Care',
    date: 'April 12, 2025',
    author: 'Dr. Rishi Malhotra',
    content: [
      "Mental health is just as important as physical health. Recognizing the signs early can make all the difference in treatment and recovery.",
      "1. Watch for changes in behavior, sleep, or eating habits. Sudden withdrawal or irritability might be a sign.",
      "2. Frequent mood swings, anxiety, or prolonged sadness should not be ignored.",
      "3. Support systems matter. Talking to a loved one or counselor can help create a safe outlet.",
      "4. Early intervention through therapy or support groups often leads to better outcomes.",
      "5. Self-care isn't selfish—encourage breaks, hobbies, journaling, and mindfulness practices."
    ]
  },
  4: {
    title: 'Diabetes Management: Daily Checklist',
    date: 'April 8, 2025',
    author: 'Dr. Anil Sharma',
    content: [
      "Managing diabetes requires daily care, consistency, and lifestyle awareness. Here's a quick checklist to stay on track:",
      "1. Monitor blood sugar levels regularly and keep a log.",
      "2. Eat low-GI foods: whole grains, vegetables, lean protein, and healthy fats.",
      "3. Stay active — even 20-30 minutes of walking helps manage insulin sensitivity.",
      "4. Take medications on time. Set reminders if needed.",
      "5. Visit your healthcare provider regularly and monitor eye, foot, and kidney health."
    ]
  }
};

const BlogPostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-8">
        <p className="text-red-600 text-lg">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-1">By {post.author}</p>
        <p className="text-sm text-gray-500 mb-6">Published on {post.date}</p>

        <div className="prose prose-blue max-w-none text-gray-800 text-lg leading-relaxed">
          {post.content.map((para, idx) => (
            <p key={idx} className="mb-4">{para}</p>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-sm transition"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;