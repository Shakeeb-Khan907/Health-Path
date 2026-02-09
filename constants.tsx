
import { BlogPost } from './types';

export const QUICK_SYMPTOMS = [
  "Headache", "Fever", "Cough", "Body Pain", 
  "Allergy", "Stomach Pain", "Acidity", "Rash", 
  "Sore Throat", "Fatigue"
];

export const SEVERITY_OPTIONS = [
  { value: "mild", label: "Mild - Minor annoyance" },
  { value: "moderate", label: "Moderate - Uncomfortable" },
  { value: "severe", label: "Severe - Impacting daily life" }
];

export const DURATION_OPTIONS = [
  { value: "just_started", label: "Just started (last few hours)" },
  { value: "day_or_two", label: "A day or two" },
  { value: "week", label: "About a week" },
  { value: "chronic", label: "Chronic (longer term)" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of "Japanese Walking": Why Interval Walking is 2026’s Top Fitness Trend',
    slug: 'japanese-walking-interval-benefits',
    category: 'Fitness',
    author: 'HealPath Editorial',
    readTime: '5 min',
    focusKeyword: 'Interval Walking Benefits',
    date: 'Feb 08, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800',
    excerpt: 'For years, we were told 10,000 steps was the magic number. But in 2026, the secret isn\'t how much you walk—it’s how you walk.',
    content: `For years, we were told 10,000 steps was the magic number. But in 2026, the secret isn't how much you walk—it’s how you walk. Known as "Japanese Walking," interval walking is taking the fitness world by storm because it offers high-intensity results without the joint pain of running.

What is Interval Walking?
The method is simple: alternate between 3 minutes of fast-paced, "brisk" walking (where you can’t easily hold a conversation) and 3 minutes of slow, recovery walking. Repeat this for 30 minutes.

Why it Works:
• Metabolic Boost: Studies from Shinshu University show this method improves aerobic capacity by up to 20%.
• Blood Pressure Control: It is significantly more effective at lowering blood pressure than steady-state walking.
• Sustainable: It’s easy on the knees, making it perfect for any age.

The Bottom Line: If you're bored with the treadmill, switch to intervals. It’s the most efficient way to turn a simple stroll into a powerhouse workout.`
  },
  {
    id: '2',
    title: 'Beyond Step Counting: How to Use Wearable Tech for Longevity',
    slug: 'wearable-tech-longevity-2026',
    category: 'Technology',
    author: 'HealPath Editorial',
    readTime: '6 min',
    focusKeyword: 'Wearable Fitness Technology 2026',
    date: 'Feb 07, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1557167668-6ebd07302705?auto=format&fit=crop&q=80&w=800',
    excerpt: 'By now, almost everyone has a smartwatch. But in 2026, we’ve moved past checking "calories burned."',
    content: `By now, almost everyone has a smartwatch. But in 2026, we’ve moved past checking "calories burned." The real value of your wearable lies in two metrics: Heart Rate Variability (HRV) and Sleep Consistency.

The Shift to Data-Driven Recovery
Instead of pushing through a workout when you’re exhausted, modern fitness is about "Bio-Syncing." If your HRV is low, your body is stressed. 2026's top performers are using this data to swap a heavy lifting session for a mobility flow, preventing burnout before it happens.

Key Metrics to Watch:
• HRV: A high HRV indicates a recovered nervous system.
• VO2 Max: The best predictor of long-term cardiovascular health.
• Sleep Recovery: Quality over quantity is the new mantra.

Pro Tip: Stop letting your watch "shame" you into hitting goals. Use it as a compass to guide your intensity, not a drill sergeant.`
  },
  {
    id: '3',
    title: 'The Menopause Revolution: Strength Training for Women Over 40',
    slug: 'strength-training-for-menopause',
    category: 'Womens Health',
    author: 'HealPath Editorial',
    readTime: '7 min',
    focusKeyword: 'Strength Training for Menopause',
    date: 'Feb 06, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The conversation around women\'s health has changed. In 2026, menopause is no longer a "silent" phase; it\'s a call to action.',
    content: `The conversation around women's health has changed. In 2026, menopause is no longer a "silent" phase; it's a call to action. With declining estrogen levels, women are at higher risk for muscle loss and osteoporosis. The solution? Heavy lifting.

Why Heavy Weights?
Cardio is great, but resistance training is what saves your bones. Lifting weights stimulates osteoblasts (bone-building cells) and keeps your metabolism firing as hormonal shifts occur.

Where to Start:
• Compound Movements: Focus on squats, deadlifts, and overhead presses.
• Protein is Non-Negotiable: Aim for 25-30g of protein per meal to support muscle protein synthesis.
• Mobility: Prioritize hip and shoulder health to keep joints lubricated.

Final Thought: Strength is the best insurance policy for your future self. It’s never too late to pick up a kettlebell.`
  },
  {
    id: '4',
    title: 'Mental Fitness: Why Breathwork is the New HIIT',
    slug: 'breathwork-physical-performance-2026',
    category: 'Mental Health',
    author: 'HealPath Editorial',
    readTime: '4 min',
    focusKeyword: 'Breathwork for Physical Performance',
    date: 'Feb 05, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    excerpt: 'In 2026, the "mind-body connection" is a core part of any gym routine. If you can’t control your breath, you can’t control your workout.',
    content: `In 2026, the "mind-body connection" is a core part of any gym routine. High-performance athletes and busy professionals alike are realizing that if you can’t control your breath, you can’t control your workout.

The Science of "The Exhale"
Integrating nasal breathing and box breathing into your routine does more than just calm you down—it optimizes your CO2 tolerance. This means you can exercise longer with less fatigue.

Daily Routine Ideas:
• Pre-Workout: 2 minutes of "Power Breathing" to wake up the nervous system.
• Intra-Workout: Focus on strictly nasal breathing during moderate cardio.
• Post-Workout: 5 minutes of box breathing to switch from "Fight or Flight" to "Rest and Digest."

The Result: Better focus, faster recovery, and a lower resting heart rate.`
  },
  {
    id: '5',
    title: 'Sustainable Weight Loss in the Age of GLP-1s',
    slug: 'healthy-weight-management-2026',
    category: 'Nutrition',
    author: 'HealPath Editorial',
    readTime: '8 min',
    focusKeyword: 'Healthy Weight Management 2026',
    date: 'Feb 04, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    excerpt: 'With the rise of weight-loss medications like GLP-1s, the focus in 2026 has shifted from losing weight to preserving muscle.',
    content: `With the rise of weight-loss medications like GLP-1s, the focus in 2026 has shifted from losing weight to preserving muscle. Rapid weight loss often comes at the cost of muscle mass, which can ruin your metabolism in the long run.

The "Muscle-First" Strategy
Whether you’re on medication or not, the goal is "Fat Loss," not just "Weight Loss." This requires a specific approach:
• Protein Prioritization: You need more protein than you think (roughly 0.8g to 1g per pound of goal weight).
• Resistance Training: This tells your body to keep the muscle and burn the fat.
• Whole Foods: Medications can suppress appetite, making every bite count. Focus on nutrient density.

Takeaway: Don't just chase a smaller number on the scale. Chase a stronger, more capable body.`
  },
  {
    id: '6',
    title: 'Bio-Syncing: Matching Your Workouts to Your Circadian Rhythm',
    slug: 'bio-syncing-fitness-circadian',
    category: 'Lifestyle',
    author: 'HealPath Editorial',
    readTime: '5 min',
    focusKeyword: 'Bio-Syncing Fitness',
    date: 'Feb 03, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1511295742364-917e704058ca?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Are you a morning lark or a night owl? In 2026, we’ve realized that working with your biology leads to better results.',
    content: `Are you a morning lark or a night owl? In 2026, we’ve realized that forcing a 5 AM workout when your body is naturally wired for 5 PM is a recipe for injury and poor results.

The Golden Window
Your body temperature and hormone levels fluctuate throughout the day.
• Mornings: Best for steady-state cardio and light mobility when cortisol is naturally high.
• Afternoons (2 PM - 6 PM): Peak time for strength training. This is when body temperature is highest and reaction times are sharpest.
• Evenings: Focus on "Down-Regulation" exercises like Yin Yoga or light walking to prep for sleep.

Why it Matters: Working with your biology instead of against it leads to better consistency and less friction in your routine.`
  },
  {
    id: '7',
    title: 'Slow Fitness: Why Recovery is the New High-Intensity',
    slug: 'recovery-movements-and-mobility',
    category: 'Wellness',
    author: 'HealPath Editorial',
    readTime: '6 min',
    focusKeyword: 'Recovery Movements and Mobility',
    date: 'Feb 02, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The "No Pain, No Gain" era is officially over. In 2026, the most respected person in the gym isn\'t the one doing the most burpees.',
    content: `The "No Pain, No Gain" era is officially over. In 2026, the most respected person in the gym isn't the one doing the most burpees—it's the one with the best mobility. "Slow Fitness" focuses on the quality of movement.

What to Include in Your "Slow" Days:
• Zone 2 Cardio: Low-intensity movement (like a light bike ride) that builds your aerobic base without stressing the heart.
• Dynamic Stretching: Moving through ranges of motion to "un-glue" the fascia from a day of sitting.
• Vibration Therapy: Using tools like massage guns or vibration plates to boost circulation.

The Benefit: By slowing down twice a week, you allow your body to actually build the muscle you worked for on the high-intensity days.`
  },
  {
    id: '8',
    title: 'Bespoke Nutrition: The End of One-Size-Fits-All Diets',
    slug: 'personalized-nutrition-2026-trends',
    category: 'Nutrition',
    author: 'HealPath Editorial',
    readTime: '9 min',
    focusKeyword: 'Personalized Nutrition 2026',
    date: 'Feb 01, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The keto vs. vegan wars of the past have been replaced by "Personalized Nutrition."',
    content: `The keto vs. vegan wars of the past have been replaced by "Personalized Nutrition." Thanks to at-home testing and AI, 2026 is about eating for your unique gut microbiome and blood sugar response.

Data over Dogma
Two people can eat the same banana and have completely different blood sugar spikes.
• Continuous Glucose Monitors (CGMs): These are no longer just for diabetics; they help people see which foods give them stable energy.
• Gut Health: Fermented foods and "prebiotic blends" are the foundation of 2026 diets, focusing on the brain-gut axis.

Actionable Step: Instead of following a celebrity's diet, track how you feel 2 hours after a meal. Energy, mood, and digestion are your best data points.`
  },
  {
    id: '9',
    title: 'Active Aging: Strength and Balance for the 60+ Demographic',
    slug: 'fitness-for-older-adults-longevity',
    category: 'Aging',
    author: 'HealPath Editorial',
    readTime: '7 min',
    focusKeyword: 'Fitness for Older Adults',
    date: 'Jan 30, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'We aren\'t just living longer; we’re staying active longer. In 2026, "Silver Fitness" is one of the fastest-growing sectors.',
    content: `We aren't just living longer; we’re staying active longer. In 2026, "Silver Fitness" is one of the fastest-growing sectors. The goal is "Healthspan"—the number of years we live in good health.

The Three Pillars of Aging Well:
• Grip Strength: A powerful predictor of longevity and overall vitality.
• Single-Leg Balance: Essential for preventing falls, the leading cause of injury in seniors.
• Functional Power: Not just strength, but the ability to move quickly (like catching yourself if you trip).

Expert Advice: Incorporating things like Tai Chi or light resistance bands can drastically improve quality of life and independence.`
  },
  {
    id: '10',
    title: 'The Hybrid Gym: Balancing Tech and Community',
    slug: 'hybrid-fitness-trends-2026-community',
    category: 'Community',
    author: 'HealPath Editorial',
    readTime: '5 min',
    focusKeyword: 'Hybrid Fitness Trends 2026',
    date: 'Jan 28, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    excerpt: 'The "Gym vs. Home" debate is settled: we want both. The 2026 fitness landscape is hybrid.',
    content: `The "Gym vs. Home" debate is settled: we want both. The 2026 fitness landscape is hybrid. We use high-tech apps for our daily workouts but crave the "Third Space" of a physical gym for community.

The Best of Both Worlds
• Digital Convenience: Using AI-powered apps to track progress and get custom plans while traveling or on busy workdays.
• In-Person Energy: Joining "Micro-Communities" (like run clubs or small group training) for the social connection that screens can't provide.
• Virtual Reality (VR): Immersive workouts are no longer a gimmick—they make "boring" cardio like rowing or cycling an adventure.

Final Thought: Technology should make fitness easier to start, but community is what makes it impossible to quit. Find your tribe, whether it's in a headset or a local studio.`
  }
];
