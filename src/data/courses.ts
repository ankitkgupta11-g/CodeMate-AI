import { Course } from '../types';

export const COURSES: Course[] = [
  {
    "id": "izrazet8divjc0bhhyur9rvb",
    "slug": "ai-fundamentals",
    "name": "AI Fundamentals",
    "description": "A beginner-friendly introduction to core AI concepts, systems, and practical use cases.",
    "difficulty": "Beginner",
    "estimatedMinutes": 90,
    "accessType": "freemium",
    "bannerSrc": "https://res.cloudinary.com/dvytn4u6i/image/upload/v1783524564/Chat_GPT_Image_Jul_8_2026_11_28_54_AM_1_3716714150.png",
    "bannerAlt": "AI Fundamentals",
    "bannerWidth": 1254,
    "bannerHeight": 1254,
    "href": "/courses/ai-fundamentals",
    "isFeatured": true,
    "sortOrder": 1,
    "chapters": [
      {
        "id": "m36jevqcelf0qvtfm7d2a12r",
        "slug": "ai-fundamentals-01",
        "name": "What Is AI?",
        "description": "Get oriented with the core ideas, history, and everyday impact of artificial intelligence.",
        "sortOrder": 1,
        "emoji": "🤖",
        "contentBlocks": [
          {
            "bodyMarkdown": "Artificial Intelligence (AI) refers to computer systems capable of performing tasks that historically required human intelligence. This includes processes like learning, reasoning, problem-solving, perception, and language understanding. Unlike traditional software that follows strict, pre-programmed rules, modern AI adapts and learns from patterns in data.",
            "id": "63",
            "malformed": false,
            "title": "Defining Artificial Intelligence",
            "type": "theory"
          },
          {
            "bodyMarkdown": "The foundation of AI was laid in 1950 when Alan Turing proposed the 'Turing Test' to assess if a machine could think. The term 'Artificial Intelligence' was officially coined in 1956 at the Dartmouth Summer Research Project. Over the decades, AI has gone through periods of high excitement and funding, followed by 'AI Winters' where progress slowed due to technological and computing limitations, before rising again with the advent of deep learning.",
            "id": "64",
            "malformed": false,
            "title": "A Brief History of AI",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! Modern AI differs from traditional software because it learns patterns from data instead of relying on static rules.",
            "id": "20",
            "incorrectFeedback": "Incorrect. Recall that modern AI learns and adapts from patterns in data.",
            "malformed": false,
            "statement": "Modern AI systems rely entirely on static, pre-programmed rules rather than learning from data patterns.",
            "title": "AI definition check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "Currently, all existing AI is **Narrow AI** (or Weak AI). This refers to systems designed and trained for a specific task—such as translating languages, recommending songs, or playing chess. **General AI** (Artificial General Intelligence or AGI) remains theoretical and refers to a machine with human-level intelligence across a wide range of tasks, capable of general reasoning and self-awareness.",
            "id": "65",
            "malformed": false,
            "title": "Narrow AI vs. General AI",
            "type": "theory"
          },
          {
            "bodyMarkdown": "AI is already deeply integrated into daily life. It powers the search engines we use, the spam filters in our email, virtual assistants like Siri and Alexa, facial recognition systems on smartphones, and prediction models for weather forecasting. These systems run in the background, making decisions based on massive volumes of data.",
            "id": "66",
            "malformed": false,
            "title": "Everyday Impact of AI",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! Narrow AI is specialized for specific tasks.",
                "id": "266",
                "isCorrect": true,
                "text": "Narrow AI"
              },
              {
                "explanation": "Incorrect. General AI refers to human-level intelligence across multiple domains.",
                "id": "267",
                "isCorrect": false,
                "text": "General AI"
              },
              {
                "explanation": "Incorrect. Super AI is a theoretical concept where AI surpasses human intelligence.",
                "id": "268",
                "isCorrect": false,
                "text": "Super AI"
              }
            ],
            "correctFeedback": "Excellent! You understand the difference between Narrow and General AI.",
            "id": "28",
            "incorrectFeedback": "Try again. Think about the specialization of current AI systems.",
            "malformed": false,
            "question": "What is the term for an AI system designed to perform a single, specific task?",
            "title": "AI Types Check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "Alan Turing proposed a game called the 'Imitation Game' (now the Turing Test) to answer: 'Can machines think?'. In the test, a human evaluator holds a text-only conversation with both a human and a machine. If the evaluator cannot reliably tell the machine apart from the human, the machine is said to have passed the test, demonstrating intelligent behavior.",
            "id": "67",
            "malformed": false,
            "title": "The Turing Test",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Machine Learning (ML) is a subset of AI that focuses on building systems that learn from data. Deep Learning is a further subset of ML based on artificial neural networks with many layers (hence 'deep'). Deep learning powers complex systems like speech recognition, computer vision, and modern large language models (LLMs).",
            "id": "68",
            "malformed": false,
            "title": "Machine Learning vs. Deep Learning",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "Machine"
            ],
            "correctFeedback": "Perfect! Deep learning is indeed a subset of machine learning.",
            "id": "26",
            "incorrectFeedback": "Think about the hierarchy: AI contains Machine Learning, which contains Deep Learning.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! Deep Learning is a subset of Machine Learning.",
                "id": "269",
                "isCorrect": true,
                "text": "Machine"
              },
              {
                "explanation": "Incorrect. Reinforcement learning is a different learning paradigm.",
                "id": "270",
                "isCorrect": false,
                "text": "Reinforcement"
              },
              {
                "explanation": "Incorrect. Supervised learning is a type of machine learning, not the parent category of deep learning.",
                "id": "271",
                "isCorrect": false,
                "text": "Supervised"
              }
            ],
            "prompt": "Deep Learning is a specialized subset of _______ Learning.",
            "title": "Subsets of AI",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "Major milestones in AI history include IBM's Deep Blue defeating world chess champion Garry Kasparov in 1997, IBM Watson winning Jeopardy in 2011, Google DeepMind's AlphaGo defeating Go champion Lee Sedol in 2016, and the launch of transformer-based LLMs in recent years, which revolutionized natural language understanding.",
            "id": "69",
            "malformed": false,
            "title": "AI Milestones",
            "type": "theory"
          },
          {
            "bodyMarkdown": "The Transformer architecture, introduced in 2017, is the foundation of modern Generative AI. It uses a mechanism called 'Self-Attention' to weigh the importance of different words in a sentence relative to one another, allowing AI to understand context in long passages of text far better than previous architectures.",
            "id": "70",
            "malformed": false,
            "title": "Understanding Transformers",
            "type": "theory"
          },
          {
            "correctFeedback": "Correct! You successfully matched these historical AI milestones.",
            "id": "16",
            "incorrectFeedback": "Incorrect. Re-read the milestones and try again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "272",
                "isCorrect": true,
                "text": "Deep Blue ➔ Defeated chess champion Garry Kasparov in 1997"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "273",
                "isCorrect": false,
                "text": "Deep Blue ➔ Defeated Go champion Lee Sedol in 2016"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "274",
                "isCorrect": false,
                "text": "AlphaGo ➔ Defeated chess champion Garry Kasparov in 1997"
              }
            ],
            "pairs": [],
            "question": "Match the AI system to its historical achievement:",
            "scenario": "Review the milestones of AI development discussed in the theory blocks.",
            "title": "Match AI Milestones",
            "type": "matching"
          }
        ]
      },
      {
        "id": "dbqoh7gbx2qr14l55kdcufcg",
        "slug": "ai-fundamentals-02",
        "name": "How AI Systems Learn",
        "description": "Understand training data, patterns, feedback loops, and why models improve over time.",
        "sortOrder": 2,
        "emoji": "🧠",
        "contentBlocks": [
          {
            "bodyMarkdown": "AI systems do not have brains; they learn by finding mathematical patterns in data. High-quality data is essential. If you train an AI on bad, incomplete, or biased data, its predictions will also be bad or biased. This is known in computer science as 'Garbage In, Garbage Out' (GIGO).",
            "id": "79",
            "malformed": false,
            "title": "Data: The Fuel of AI",
            "type": "theory"
          },
          {
            "bodyMarkdown": "In AI learning, data consists of **features** (inputs) and sometimes **labels** (the target answers). For instance, in a system predicting house prices, features include size, location, and bedrooms, while the label is the sale price. AI maps the features to the labels during training.",
            "id": "80",
            "malformed": false,
            "title": "Features and Labeled Data",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! Algorithms learn patterns from data. If the data is biased, the output will also be biased (Garbage In, Garbage Out).",
            "id": "22",
            "incorrectFeedback": "Incorrect. A well-written algorithm cannot fix the bias present in its training dataset.",
            "malformed": false,
            "statement": "Training an AI system on biased data will still yield unbiased results if the algorithm is well-written.",
            "title": "Data quality check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "During training, an AI model is shown data repeatedly. It makes a prediction, calculates how wrong it is using a **loss function**, and adjusts its internal numbers (called **weights** or **parameters**) to minimize that error. This loop runs millions or billions of times until the model's predictions become accurate.",
            "id": "81",
            "malformed": false,
            "title": "The Training Loop",
            "type": "theory"
          },
          {
            "bodyMarkdown": "An **epoch** is one complete pass of the entire training dataset through the model. Models usually require training over many epochs. **Convergence** is reached when the loss function stabilizes and further training no longer improves the model's accuracy.",
            "id": "82",
            "malformed": false,
            "title": "Epochs and Convergence",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! Weights are the parameters adjusted during training.",
                "id": "284",
                "isCorrect": true,
                "text": "Weights/Parameters"
              },
              {
                "explanation": "Incorrect. An epoch is a single pass through the dataset, not an internal parameter.",
                "id": "285",
                "isCorrect": false,
                "text": "Epochs"
              },
              {
                "explanation": "Incorrect. Inputs are the data fed to the model, not internal numbers adjusted by it.",
                "id": "286",
                "isCorrect": false,
                "text": "Inputs"
              }
            ],
            "correctFeedback": "Good job! Weights/Parameters are indeed the adjustable variables of the model.",
            "id": "30",
            "incorrectFeedback": "Review the training loop theory and try again.",
            "malformed": false,
            "question": "What are the internal numbers that an AI adjusts during training to improve its predictions?",
            "title": "Parameters check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "The **loss function** (or cost function) measures the difference between the model's prediction and the actual correct label. A high loss indicates the model is performing poorly, while a loss close to zero means the model is making highly accurate predictions on the training data.",
            "id": "83",
            "malformed": false,
            "title": "The Role of Loss Functions",
            "type": "theory"
          },
          {
            "bodyMarkdown": "An **optimizer** is the algorithm that adjusts the weights based on the loss. **Gradient Descent** is the most common optimizer. It works by taking small steps down the slope of the loss function curve, searching for the lowest point (the minimum loss).",
            "id": "84",
            "malformed": false,
            "title": "Optimizers and Gradient Descent",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "loss"
            ],
            "correctFeedback": "Correct! The loss function evaluates the error.",
            "id": "28",
            "incorrectFeedback": "Recall the term used for measuring how wrong the model is.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! The loss function measures the error.",
                "id": "287",
                "isCorrect": true,
                "text": "loss"
              },
              {
                "explanation": "Incorrect. The optimizer adjusts the weights, it doesn't measure the error.",
                "id": "288",
                "isCorrect": false,
                "text": "optimizer"
              },
              {
                "explanation": "Incorrect. Activation functions add non-linearity to networks.",
                "id": "289",
                "isCorrect": false,
                "text": "activation"
              }
            ],
            "prompt": "The ______ function measures the error between the model's prediction and the correct label.",
            "title": "Loss function purpose",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "The ultimate goal of training is **generalization**—the model's ability to make accurate predictions on new, unseen data. If a model only performs well on the training data but fails on new data, it has not generalized successfully.",
            "id": "85",
            "malformed": false,
            "title": "Generalization",
            "type": "theory"
          },
          {
            "bodyMarkdown": "If a model is too simple, it suffers from **underfitting** (fails to learn the patterns). If it is too complex or trained too long, it suffers from **overfitting** (memorizes the training data, including its noise, and fails to generalize to new data).",
            "id": "86",
            "malformed": false,
            "title": "Underfitting vs Overfitting",
            "type": "theory"
          },
          {
            "correctFeedback": "Spot on! You understand generalization, overfitting, and underfitting.",
            "id": "18",
            "incorrectFeedback": "Let's review the definitions and match them again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "290",
                "isCorrect": true,
                "text": "Generalization ➔ Ability to perform well on new, unseen data"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "291",
                "isCorrect": false,
                "text": "Generalization ➔ Memorizing training data noise, failing on new data"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "292",
                "isCorrect": false,
                "text": "Overfitting ➔ Ability to perform well on new, unseen data"
              }
            ],
            "pairs": [],
            "question": "Match the learning concept to its description:",
            "scenario": "Differentiate between generalization, overfitting, and underfitting.",
            "title": "Match learning concepts",
            "type": "matching"
          }
        ]
      },
      {
        "id": "qrqvtoy09onjkz0fcl5yjg82",
        "slug": "ai-fundamentals-03",
        "name": "Types of AI",
        "description": "Compare narrow AI, generative AI, and emerging capabilities across real-world systems.",
        "sortOrder": 3,
        "emoji": "🧩",
        "contentBlocks": [
          {
            "bodyMarkdown": "In **Supervised Learning**, the AI learns from a dataset containing both inputs and their corresponding correct outputs (labels). The system is 'supervised' by the correct answers. Common examples include classifying email as spam or not spam, or predicting housing prices based on features.",
            "id": "95",
            "malformed": false,
            "title": "Supervised Learning",
            "type": "theory"
          },
          {
            "bodyMarkdown": "In **Unsupervised Learning**, the AI is given data *without* any labels. Its goal is to explore the data and find hidden structures or groupings on its own. A common application is customer segmentation, where the AI groups buyers based on similar purchasing habits.",
            "id": "96",
            "malformed": false,
            "title": "Unsupervised Learning",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! Customer segmentation is unsupervised because there are no predefined labels or correct answers provided.",
            "id": "24",
            "incorrectFeedback": "Incorrect. Since there are no labels, the system is unsupervised.",
            "malformed": false,
            "statement": "Customer segmentation (grouping buyers without predefined labels) is an example of Supervised Learning.",
            "title": "Learning type check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "In **Reinforcement Learning** (RL), an AI 'agent' learns by interacting with an environment. It performs actions and receives feedback in the form of **rewards** (for good moves) or **penalties** (for bad moves). Over time, it learns a policy to maximize its cumulative reward. This is how AI learns to play video games or navigate robotics.",
            "id": "97",
            "malformed": false,
            "title": "Reinforcement Learning",
            "type": "theory"
          },
          {
            "bodyMarkdown": "**Generative AI** is a class of AI models that can generate new content, such as text, images, code, or music. These models (like GPT or Midjourney) are trained on massive datasets to predict the next word or pixel based on a user's prompt.",
            "id": "98",
            "malformed": false,
            "title": "Generative AI",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! RL relies on rewards and penalties.",
                "id": "302",
                "isCorrect": true,
                "text": "Reinforcement Learning"
              },
              {
                "explanation": "Incorrect. Supervised learning relies on labeled training data.",
                "id": "303",
                "isCorrect": false,
                "text": "Supervised Learning"
              },
              {
                "explanation": "Incorrect. Unsupervised learning looks for patterns in unlabeled data.",
                "id": "304",
                "isCorrect": false,
                "text": "Unsupervised Learning"
              }
            ],
            "correctFeedback": "Excellent! Reinforcement learning matches the reward/penalty loop description.",
            "id": "32",
            "incorrectFeedback": "Think about training agents in dynamic environments (like games or robots).",
            "malformed": false,
            "question": "Which type of learning involves training an agent through feedback of rewards and penalties?",
            "title": "Learning types check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "Large Language Models are Generative AI systems trained on massive amounts of text. They predict the probability of a word given the preceding words. By doing this recursively, they write sentences, answer questions, write code, and summarize articles.",
            "id": "99",
            "malformed": false,
            "title": "Large Language Models (LLMs)",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Computer Vision is a field of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs. Applications include facial recognition, object detection in self-driving cars, and automated medical scan analysis.",
            "id": "100",
            "malformed": false,
            "title": "Computer Vision",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "Language"
            ],
            "correctFeedback": "Perfect! Large Language Models (LLMs) are the foundation of modern text generation.",
            "id": "30",
            "incorrectFeedback": "Think of the 'L' that represents words and communication.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! LLMs stands for Large Language Models.",
                "id": "305",
                "isCorrect": true,
                "text": "Language"
              },
              {
                "explanation": "Incorrect. LLM stands for Large Language Models.",
                "id": "306",
                "isCorrect": false,
                "text": "Learning"
              },
              {
                "explanation": "Incorrect. LLM stands for Large Language Models.",
                "id": "307",
                "isCorrect": false,
                "text": "Logic"
              }
            ],
            "prompt": "Models trained on massive text corpora to predict the next word are called Large ______ Models.",
            "title": "Generative AI Subtype",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "Natural Language Processing (NLP) is the broader branch of AI concerned with giving computers the ability to understand, interpret, and manipulate human language. LLMs are a modern, highly advanced subset of NLP.",
            "id": "101",
            "malformed": false,
            "title": "Natural Language Processing (NLP)",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Speech Recognition converts spoken audio into text (speech-to-text). Text-to-Speech (TTS) does the opposite, converting written text into spoken audio. Both rely heavily on neural networks to sound natural and achieve high accuracy.",
            "id": "102",
            "malformed": false,
            "title": "Speech Recognition and TTS",
            "type": "theory"
          },
          {
            "correctFeedback": "Superb! You correctly identified the domains of Vision, Text, and Voice AI.",
            "id": "20",
            "incorrectFeedback": "Check the mappings and try again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "308",
                "isCorrect": true,
                "text": "Computer Vision ➔ Analyzing and understanding digital images and video"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "309",
                "isCorrect": false,
                "text": "Computer Vision ➔ Interpreting, manipulating, and generating written text"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "310",
                "isCorrect": false,
                "text": "Natural Language Processing ➔ Analyzing and understanding digital images and video"
              }
            ],
            "pairs": [],
            "question": "Match the AI branch to its primary input/output format:",
            "scenario": "Categorize AI capabilities by the medium of data they operate on.",
            "title": "Match AI branches",
            "type": "matching"
          }
        ]
      },
      {
        "id": "s11yh3ncw55d7vm18z20rfwm",
        "slug": "ai-fundamentals-04",
        "name": "AI Tools in Daily Work",
        "description": "See how AI supports writing, research, planning, automation, and decision support.",
        "sortOrder": 4,
        "emoji": "🛠️",
        "contentBlocks": [
          {
            "id": "theory_s11yh3ncw55d7vm18z20rfwm_1",
            "type": "theory",
            "title": "Introduction to AI Tools in Daily Work",
            "bodyMarkdown": "In this chapter, we delve into **AI Tools in Daily Work** within the **AI Fundamentals** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_s11yh3ncw55d7vm18z20rfwm_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering AI Tools in Daily Work?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_s11yh3ncw55d7vm18z20rfwm_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "AI Tools in Daily Work principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "t411f29y9o763a9691agox0c",
        "slug": "ai-fundamentals-05",
        "name": "Data, Models, and Outputs",
        "description": "Connect the relationship between data quality, model behavior, and output reliability.",
        "sortOrder": 5,
        "emoji": "📤",
        "contentBlocks": [
          {
            "id": "theory_t411f29y9o763a9691agox0c_1",
            "type": "theory",
            "title": "Introduction to Data, Models, and Outputs",
            "bodyMarkdown": "In this chapter, we delve into **Data, Models, and Outputs** within the **AI Fundamentals** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_t411f29y9o763a9691agox0c_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Data, Models, and Outputs?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_t411f29y9o763a9691agox0c_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Data, Models, and Outputs principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "c64jgyj1540ma11j0drjza2d",
        "slug": "ai-fundamentals-06",
        "name": "Risks and Limitations",
        "description": "Learn where hallucinations, bias, privacy concerns, and weak reasoning can appear.",
        "sortOrder": 6,
        "emoji": "⚠️",
        "contentBlocks": [
          {
            "id": "theory_c64jgyj1540ma11j0drjza2d_1",
            "type": "theory",
            "title": "Introduction to Risks and Limitations",
            "bodyMarkdown": "In this chapter, we delve into **Risks and Limitations** within the **AI Fundamentals** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_c64jgyj1540ma11j0drjza2d_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Risks and Limitations?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_c64jgyj1540ma11j0drjza2d_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Risks and Limitations principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "n4zeofwdfomorjhi3jbpjaqq",
        "slug": "ai-fundamentals-07",
        "name": "Responsible AI Basics",
        "description": "Review practical guardrails for safe, transparent, and ethical AI-assisted work.",
        "sortOrder": 7,
        "emoji": "🛡️",
        "contentBlocks": [
          {
            "id": "theory_n4zeofwdfomorjhi3jbpjaqq_1",
            "type": "theory",
            "title": "Introduction to Responsible AI Basics",
            "bodyMarkdown": "In this chapter, we delve into **Responsible AI Basics** within the **AI Fundamentals** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_n4zeofwdfomorjhi3jbpjaqq_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Responsible AI Basics?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_n4zeofwdfomorjhi3jbpjaqq_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Responsible AI Basics principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "jm1rttc0qrp1a6iumg6jsw6l",
        "slug": "ai-fundamentals-08",
        "name": "Your First AI Workflow",
        "description": "Combine the fundamentals into a simple repeatable workflow you can use immediately.",
        "sortOrder": 8,
        "emoji": "🚀",
        "contentBlocks": [
          {
            "id": "theory_jm1rttc0qrp1a6iumg6jsw6l_1",
            "type": "theory",
            "title": "Introduction to Your First AI Workflow",
            "bodyMarkdown": "In this chapter, we delve into **Your First AI Workflow** within the **AI Fundamentals** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_jm1rttc0qrp1a6iumg6jsw6l_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Your First AI Workflow?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_jm1rttc0qrp1a6iumg6jsw6l_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Your First AI Workflow principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      }
    ]
  },
  {
    "id": "puny2kfhsdc3xnxpuvxmif03",
    "slug": "prompt-engineering",
    "name": "Prompt Engineering",
    "description": "Learn how to craft effective prompts, iterate on outputs, and build reliable AI-assisted workflows.",
    "difficulty": "Beginner",
    "estimatedMinutes": 75,
    "accessType": "free",
    "bannerSrc": "https://res.cloudinary.com/dvytn4u6i/image/upload/v1783523334/Chat_GPT_Image_Jul_8_2026_08_17_30_AM_a2b76a766c.png",
    "bannerAlt": "Prompt Engineering",
    "bannerWidth": 1254,
    "bannerHeight": 1254,
    "href": "/courses/prompt-engineering",
    "isFeatured": false,
    "sortOrder": 2,
    "chapters": [
      {
        "id": "ly9ek59ggy84ss2gd6bqzx7z",
        "slug": "prompt-engineering-01",
        "name": "Prompting Principles",
        "description": "Learn the structure of strong prompts and how clarity changes output quality.",
        "sortOrder": 1,
        "emoji": "✍️",
        "contentBlocks": [
          {
            "bodyMarkdown": "A strong prompt usually includes three things:\n\n- **A clear task**\n- **Useful context**\n- **A target output**\n\nWeak prompts are vague. Strong prompts reduce guessing and make the answer more reliable.",
            "id": "23",
            "malformed": false,
            "title": "What makes a prompt effective?",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Use this beginner-friendly pattern:\n\n**Role + Task + Context + Output format**\n\nExample: \"You are a study coach. Summarize these notes for a beginner in 5 bullet points and end with one practice question.\"",
            "id": "24",
            "malformed": false,
            "title": "The simple prompt formula",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Too vague.",
                "id": "105",
                "isCorrect": false,
                "text": "Summarize this."
              },
              {
                "explanation": "Correct. It defines task, audience, and output.",
                "id": "106",
                "isCorrect": true,
                "text": "Summarize these biology notes for a beginner in 4 bullet points and include 2 key terms."
              },
              {
                "explanation": "It asks for help but not a deliverable.",
                "id": "107",
                "isCorrect": false,
                "text": "Can you help with biology?"
              },
              {
                "explanation": "Too broad and unfocused.",
                "id": "108",
                "isCorrect": false,
                "text": "Tell me things about science."
              }
            ],
            "correctFeedback": "Right. Specific prompts usually perform better.",
            "id": "12",
            "incorrectFeedback": "Pick the option with the clearest task and format.",
            "malformed": false,
            "question": "Which prompt is most likely to produce a useful study summary?",
            "title": "Spot the better prompt",
            "type": "multiple-choice"
          },
          {
            "acceptedAnswers": [
              "specific"
            ],
            "correctFeedback": "Correct. Specific prompts reduce ambiguity.",
            "id": "12",
            "incorrectFeedback": "Think about what removes guessing.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct.",
                "id": "109",
                "isCorrect": true,
                "text": "specific"
              },
              {
                "explanation": "Length is not the main factor.",
                "id": "110",
                "isCorrect": false,
                "text": "long"
              },
              {
                "explanation": "Tone matters less than clarity.",
                "id": "111",
                "isCorrect": false,
                "text": "casual"
              },
              {
                "explanation": "Creativity is optional here.",
                "id": "112",
                "isCorrect": false,
                "text": "creative"
              }
            ],
            "prompt": "The more ______ your prompt is, the less the model has to guess.",
            "title": "Core principle",
            "type": "fill-in-the-blank"
          },
          {
            "correctAnswer": true,
            "correctFeedback": "Correct. Format instructions reduce unwanted variation.",
            "id": "8",
            "incorrectFeedback": "When format matters, say it explicitly.",
            "malformed": false,
            "statement": "A good prompt should clearly state the output format when format matters.",
            "title": "Precision check",
            "type": "true-false"
          },
          {
            "codeLanguage": "text",
            "codeSnippet": "Vague prompt: \"Explain photosynthesis.\"",
            "expectedAnswer": "Explain photosynthesis to a 12-year-old in 3 short bullet points and end with one simple real-world example.",
            "failureFeedback": "Try adding who the answer is for and how it should be formatted.",
            "id": "8",
            "malformed": false,
            "placeholderAnswer": "Explain photosynthesis to a 12-year-old in 3 short bullet points and end with one simple real-world example.",
            "successFeedback": "Good rewrite. You added audience and structure.",
            "taskPrompt": "Rewrite the prompt so it is useful for a 12-year-old learner and asks for a short, structured answer.",
            "theoryMarkdown": "Improving a prompt usually means adding audience, structure, and expected output.",
            "title": "Rewrite a vague prompt",
            "type": "code-exercise"
          }
        ]
      },
      {
        "id": "j1qomf2le9iosjijcd9jrllw",
        "slug": "prompt-engineering-02",
        "name": "Giving Better Context",
        "description": "Use goals, constraints, references, and audience details to guide the model well.",
        "sortOrder": 2,
        "emoji": "💬",
        "contentBlocks": [
          {
            "bodyMarkdown": "Models respond better when they know the setting of the task. Context can include:\n\n- the audience\n- the goal\n- the source material\n- the constraints\n\nWithout context, the model fills gaps on its own.",
            "id": "27",
            "malformed": false,
            "title": "Why context changes the answer",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Before sending a prompt, ask:\n\n1. Who is this for?\n2. What should the answer help them do?\n3. What source or background should the model use?\n4. What limits should it follow?",
            "id": "28",
            "malformed": false,
            "title": "A useful context checklist",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "No audience or purpose.",
                "id": "125",
                "isCorrect": false,
                "text": "Write an email."
              },
              {
                "explanation": "Correct. It gives audience, purpose, tone, and length.",
                "id": "126",
                "isCorrect": true,
                "text": "Write a short email to a hiring manager thanking them after an interview. Keep it professional and under 120 words."
              },
              {
                "explanation": "Still too vague.",
                "id": "127",
                "isCorrect": false,
                "text": "Help me say thanks."
              },
              {
                "explanation": "Not enough context.",
                "id": "128",
                "isCorrect": false,
                "text": "Say something polite."
              }
            ],
            "correctFeedback": "Correct. Context shapes tone and usefulness.",
            "id": "14",
            "incorrectFeedback": "Look for the option that explains purpose and audience.",
            "malformed": false,
            "question": "Which prompt gives the model the best context?",
            "title": "Choose the better context",
            "type": "multiple-choice"
          },
          {
            "acceptedAnswers": [
              "goal"
            ],
            "correctFeedback": "Correct. Goal and constraints guide the model.",
            "id": "14",
            "incorrectFeedback": "Think about what context clarifies first.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct.",
                "id": "129",
                "isCorrect": true,
                "text": "goal"
              },
              {
                "explanation": "Not relevant here.",
                "id": "130",
                "isCorrect": false,
                "text": "weather"
              },
              {
                "explanation": "Not relevant.",
                "id": "131",
                "isCorrect": false,
                "text": "keyboard"
              },
              {
                "explanation": "Formatting tools are not the point.",
                "id": "132",
                "isCorrect": false,
                "text": "font"
              }
            ],
            "prompt": "Context helps the model understand the ______ and limits of the task.",
            "title": "Context vocabulary",
            "type": "fill-in-the-blank"
          },
          {
            "correctAnswer": true,
            "correctFeedback": "Correct. Audience changes vocabulary, detail level, and tone.",
            "id": "6",
            "incorrectFeedback": "You should usually name the audience when it affects the answer.",
            "malformed": false,
            "question": "If your answer is meant for finance executives, should you say that in the prompt?",
            "title": "Audience check",
            "type": "yes-no"
          },
          {
            "correctFeedback": "Right. Audience and deliverable details are high-value context.",
            "id": "6",
            "incorrectFeedback": "Choose the context that directly shapes the output.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct. That context changes both style and usefulness.",
                "id": "133",
                "isCorrect": true,
                "text": "Tell it the notes are for busy managers and should end with action items."
              },
              {
                "explanation": "Interesting is subjective and weak.",
                "id": "134",
                "isCorrect": false,
                "text": "Tell it to be interesting."
              },
              {
                "explanation": "That does not guide the task.",
                "id": "135",
                "isCorrect": false,
                "text": "Tell it AI is powerful."
              },
              {
                "explanation": "Speed is not the core improvement here.",
                "id": "136",
                "isCorrect": false,
                "text": "Tell it to respond soon."
              }
            ],
            "pairs": [],
            "question": "Which added context would improve the prompt the most?",
            "scenario": "A teammate says: \"Ask AI to make meeting notes.\"",
            "title": "Best added context",
            "type": "matching"
          }
        ]
      },
      {
        "id": "de3f977qn3cr55s06pafy99d",
        "slug": "prompt-engineering-03",
        "name": "Instruction Patterns",
        "description": "Practice templates for summarizing, rewriting, extracting, comparing, and planning.",
        "sortOrder": 3,
        "emoji": "📋",
        "contentBlocks": [
          {
            "bodyMarkdown": "Many useful prompts follow repeatable patterns, such as:\n\n- summarize\n- extract\n- rewrite\n- compare\n- classify\n- plan\n\nThe verb you choose strongly shapes the output.",
            "id": "31",
            "malformed": false,
            "title": "Common instruction patterns",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Good instruction patterns often pair the task with an output shape.\n\nExample: \"Extract the customer name, issue, and urgency level from this message. Return the result as a table.\"",
            "id": "32",
            "malformed": false,
            "title": "Tell the model how to respond",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "No extraction target.",
                "id": "145",
                "isCorrect": false,
                "text": "Read this support ticket."
              },
              {
                "explanation": "Correct. It states fields and format.",
                "id": "146",
                "isCorrect": true,
                "text": "Extract the customer name, product, and problem from this support ticket. Return JSON."
              },
              {
                "explanation": "That invites opinion, not extraction.",
                "id": "147",
                "isCorrect": false,
                "text": "What do you think about this ticket?"
              },
              {
                "explanation": "That is rewriting, not extraction.",
                "id": "148",
                "isCorrect": false,
                "text": "Make this ticket shorter."
              }
            ],
            "correctFeedback": "Correct. Extraction prompts should name the fields to pull.",
            "id": "16",
            "incorrectFeedback": "Pick the option that names exactly what to extract.",
            "malformed": false,
            "question": "Which prompt is the best extraction prompt?",
            "title": "Extraction pattern",
            "type": "multiple-choice"
          },
          {
            "acceptedAnswers": [
              "extraction"
            ],
            "correctFeedback": "Correct. Extraction is for pulling structured details from text.",
            "id": "16",
            "incorrectFeedback": "Choose the pattern used to pull fields out of content.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct.",
                "id": "149",
                "isCorrect": true,
                "text": "extraction"
              },
              {
                "explanation": "Not relevant.",
                "id": "150",
                "isCorrect": false,
                "text": "drawing"
              },
              {
                "explanation": "Prompting should reduce guessing.",
                "id": "151",
                "isCorrect": false,
                "text": "guessing"
              },
              {
                "explanation": "Editing is a different task.",
                "id": "152",
                "isCorrect": false,
                "text": "editing"
              }
            ],
            "prompt": "When you want specific fields pulled from text, use an ______ prompt.",
            "title": "Pattern language",
            "type": "fill-in-the-blank"
          },
          {
            "correctAnswer": true,
            "correctFeedback": "Correct. Task plus format is a strong combination.",
            "id": "10",
            "incorrectFeedback": "Models can follow both task and output-shape instructions.",
            "malformed": false,
            "statement": "You can ask a model to compare two options and present the result in a table.",
            "title": "Format control",
            "type": "true-false"
          },
          {
            "codeLanguage": "text",
            "codeSnippet": "Vague prompt: \"Read this article and help me.\"",
            "expectedAnswer": "Extract 3 key facts from this article and return them as bullet points with one sentence per fact.",
            "failureFeedback": "Name the task directly and specify the response format.",
            "id": "10",
            "malformed": false,
            "placeholderAnswer": "Extract 3 key facts from this article and return them as bullet points with one sentence per fact.",
            "successFeedback": "Good. You turned a vague request into a clear instruction pattern.",
            "taskPrompt": "Rewrite it as an extraction prompt that pulls 3 key facts and returns them as bullet points.",
            "theoryMarkdown": "A prompt becomes easier to use when the task verb and result format are explicit.",
            "title": "Turn a vague instruction into a pattern",
            "type": "code-exercise"
          }
        ]
      },
      {
        "id": "akx1xa9k4xxy78fe6am63pf4",
        "slug": "prompt-engineering-04",
        "name": "Few-Shot Prompting",
        "description": "Improve consistency by showing examples that demonstrate the format you expect.",
        "sortOrder": 4,
        "emoji": "🎯",
        "contentBlocks": [
          {
            "id": "theory_akx1xa9k4xxy78fe6am63pf4_1",
            "type": "theory",
            "title": "Introduction to Few-Shot Prompting",
            "bodyMarkdown": "In this chapter, we delve into **Few-Shot Prompting** within the **Prompt Engineering** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_akx1xa9k4xxy78fe6am63pf4_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Few-Shot Prompting?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_akx1xa9k4xxy78fe6am63pf4_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Few-Shot Prompting principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "pz894hzzaz4vxoen28w9qdvi",
        "slug": "prompt-engineering-05",
        "name": "Iterating on Responses",
        "description": "Refine prompts systematically when the first answer is incomplete or off-target.",
        "sortOrder": 5,
        "emoji": "🔁",
        "contentBlocks": [
          {
            "id": "theory_pz894hzzaz4vxoen28w9qdvi_1",
            "type": "theory",
            "title": "Introduction to Iterating on Responses",
            "bodyMarkdown": "In this chapter, we delve into **Iterating on Responses** within the **Prompt Engineering** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_pz894hzzaz4vxoen28w9qdvi_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Iterating on Responses?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_pz894hzzaz4vxoen28w9qdvi_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Iterating on Responses principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "nbdf5wjt54458pd2ft2be5ea",
        "slug": "prompt-engineering-06",
        "name": "Reducing Hallucinations",
        "description": "Use grounding, verification steps, and bounded tasks to improve factual reliability.",
        "sortOrder": 6,
        "emoji": "🔍",
        "contentBlocks": [
          {
            "id": "theory_nbdf5wjt54458pd2ft2be5ea_1",
            "type": "theory",
            "title": "Introduction to Reducing Hallucinations",
            "bodyMarkdown": "In this chapter, we delve into **Reducing Hallucinations** within the **Prompt Engineering** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_nbdf5wjt54458pd2ft2be5ea_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Reducing Hallucinations?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_nbdf5wjt54458pd2ft2be5ea_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Reducing Hallucinations principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "zzr4speum1pasx66rvam0kff",
        "slug": "prompt-engineering-07",
        "name": "Prompt Workflows",
        "description": "Break larger tasks into staged prompts that are easier to control and review.",
        "sortOrder": 7,
        "emoji": "⚙️",
        "contentBlocks": [
          {
            "id": "theory_zzr4speum1pasx66rvam0kff_1",
            "type": "theory",
            "title": "Introduction to Prompt Workflows",
            "bodyMarkdown": "In this chapter, we delve into **Prompt Workflows** within the **Prompt Engineering** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_zzr4speum1pasx66rvam0kff_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Prompt Workflows?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_zzr4speum1pasx66rvam0kff_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Prompt Workflows principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "yyu7oh8muyurfpes5nwifrpp",
        "slug": "prompt-engineering-08",
        "name": "Building a Reusable Prompt Library",
        "description": "Turn effective prompts into reusable assets for repeated work across teams.",
        "sortOrder": 8,
        "emoji": "📚",
        "contentBlocks": [
          {
            "id": "theory_yyu7oh8muyurfpes5nwifrpp_1",
            "type": "theory",
            "title": "Introduction to Building a Reusable Prompt Library",
            "bodyMarkdown": "In this chapter, we delve into **Building a Reusable Prompt Library** within the **Prompt Engineering** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_yyu7oh8muyurfpes5nwifrpp_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Building a Reusable Prompt Library?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_yyu7oh8muyurfpes5nwifrpp_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Building a Reusable Prompt Library principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      }
    ]
  },
  {
    "id": "ap8ccub7re27h0txbkt4nknp",
    "slug": "machine-learning-basics",
    "name": "Machine Learning Basics",
    "description": "Understand supervised learning, model evaluation, and the building blocks behind modern AI systems.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 110,
    "accessType": "free",
    "bannerSrc": "https://res.cloudinary.com/dvytn4u6i/image/upload/v1783524564/Chat_GPT_Image_Jul_8_2026_11_28_55_AM_3_af161ba446.png",
    "bannerAlt": "Machine Learning Basics",
    "bannerWidth": 1254,
    "bannerHeight": 1254,
    "href": "/courses/machine-learning-basics",
    "isFeatured": false,
    "sortOrder": 3,
    "chapters": [
      {
        "id": "lzjram8idtt1bijd4nh1odsc",
        "slug": "machine-learning-basics-01",
        "name": "Machine Learning Foundations",
        "description": "Understand how machine learning fits inside the broader AI landscape.",
        "sortOrder": 1,
        "emoji": "🏗️",
        "contentBlocks": [
          {
            "bodyMarkdown": "Machine Learning (ML) is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns, and make decisions with minimal human intervention. Instead of writing code with explicit rules, we write algorithms that learn from examples.",
            "id": "191",
            "malformed": false,
            "title": "What is Machine Learning?",
            "type": "theory"
          },
          {
            "bodyMarkdown": "In traditional programming, a developer writes **rules** (code) and feeds in **data** to produce **answers**. In Machine Learning, we feed in **data** and **answers** (labels) into the computer, and the computer outputs the **rules** (the model). The computer figures out the relationship between inputs and outputs on its own.",
            "id": "192",
            "malformed": false,
            "title": "Traditional Programming vs. ML",
            "type": "theory"
          },
          {
            "correctAnswer": true,
            "correctFeedback": "Correct! That is the fundamental paradigm shift from traditional software development to machine learning.",
            "id": "36",
            "incorrectFeedback": "Incorrect. Think about what the developer inputs versus what the computer learns to produce.",
            "malformed": false,
            "statement": "In traditional programming, the developer inputs data and rules to get answers, whereas in Machine Learning, the system inputs data and answers to discover the rules.",
            "title": "Programming Paradigms Check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "An ML **model** is the mathematical representation of the patterns discovered in the training data. Once trained, the model acts like a function: you input new features, and it outputs a prediction. The quality of this model is determined by both the training algorithm and the dataset.",
            "id": "193",
            "malformed": false,
            "title": "The Concept of a 'Model'",
            "type": "theory"
          },
          {
            "bodyMarkdown": "A model contains **parameters** and **hyperparameters**. Parameters are internal values (like weights) that the model learns during training. Hyperparameters are external configuration settings (like learning rate or number of trees in a forest) set by the developer before training starts to control the learning process.",
            "id": "194",
            "malformed": false,
            "title": "Parameters and Hyperparameters",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! Hyperparameters are configuration settings adjusted by developers.",
                "id": "410",
                "isCorrect": true,
                "text": "Hyperparameter"
              },
              {
                "explanation": "Incorrect. Parameters are learned internally by the model during training.",
                "id": "411",
                "isCorrect": false,
                "text": "Parameter / Weight"
              },
              {
                "explanation": "Incorrect. Output labels are the targets we predict, not configuration settings.",
                "id": "412",
                "isCorrect": false,
                "text": "Output Label"
              }
            ],
            "correctFeedback": "Perfect! Hyperparameters guide how the model learns, whereas parameters are what it actually learns.",
            "id": "44",
            "incorrectFeedback": "Review the difference between learned parameters and preset settings.",
            "malformed": false,
            "question": "Which of the following is a setting configured by the developer before training to control the learning process?",
            "title": "Hyperparameter Check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "An ML model is only as good as the data it was trained on. A model trained only on photos of red apples will fail to recognize green apples. Thus, datasets must be representative of the scenarios the model will encounter in the real world.",
            "id": "195",
            "malformed": false,
            "title": "How Data Shapes Models",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Artificial Neural Networks (ANNs) are ML models inspired by the structure of biological brains. They consist of connected layers of nodes ('neurons'). Signals pass from the input layer through hidden layers to the output layer, with weights on the connections being adjusted to make accurate predictions.",
            "id": "196",
            "malformed": false,
            "title": "Introduction to Neural Networks",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "parameters"
            ],
            "correctFeedback": "Correct! The model adjusts its parameters/weights automatically during training.",
            "id": "42",
            "incorrectFeedback": "Think about variables adjusted internally by the model.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! These are parameters (or weights).",
                "id": "413",
                "isCorrect": true,
                "text": "parameters"
              },
              {
                "explanation": "Incorrect. Hyperparameters are set before training.",
                "id": "414",
                "isCorrect": false,
                "text": "hyperparameters"
              },
              {
                "explanation": "Incorrect. Datasets are collections of samples.",
                "id": "415",
                "isCorrect": false,
                "text": "datasets"
              }
            ],
            "prompt": "Adjustable internal variables in a model learned during training are called ______.",
            "title": "Model components",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "Training a model requires high computational power. Once the model is trained, using it to make predictions on new data is called **inference**. Inference is much faster and requires significantly less computational resource than training.",
            "id": "197",
            "malformed": false,
            "title": "Inference: Running the Model",
            "type": "theory"
          },
          {
            "bodyMarkdown": "In **Offline Learning** (batch learning), the model is trained on a static dataset, deployed, and never updated unless we train a new version. In **Online Learning**, the model continues to ingest new data and update its parameters incrementally while running in production.",
            "id": "198",
            "malformed": false,
            "title": "Offline vs Online Learning",
            "type": "theory"
          },
          {
            "correctFeedback": "Awesome! You have successfully mastered these foundational terms.",
            "id": "32",
            "incorrectFeedback": "Look at the pairings and try again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "416",
                "isCorrect": true,
                "text": "Model ➔ The mathematical representation of learned data patterns"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "417",
                "isCorrect": false,
                "text": "Model ➔ Using a trained model to make predictions on new data"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "418",
                "isCorrect": false,
                "text": "Inference ➔ The mathematical representation of learned data patterns"
              }
            ],
            "pairs": [],
            "question": "Match the machine learning term to its description:",
            "scenario": "Verify your understanding of foundational machine learning concepts.",
            "title": "Match ML foundations",
            "type": "matching"
          }
        ]
      },
      {
        "id": "i26ievp5bm614144mryl71jg",
        "slug": "machine-learning-basics-02",
        "name": "Supervised Learning",
        "description": "Explore labeled datasets, training targets, and common prediction tasks.",
        "sortOrder": 2,
        "emoji": "🏷️",
        "contentBlocks": [
          {
            "bodyMarkdown": "Supervised Learning is the most common form of machine learning. The algorithm is trained on a dataset where each input (features) is paired with the correct output (label). By looking at millions of examples, the algorithm learns the relationship mapping inputs to outputs.",
            "id": "207",
            "malformed": false,
            "title": "What is Supervised Learning?",
            "type": "theory"
          },
          {
            "bodyMarkdown": "If you want to train a model to identify emails as spam, the **features** might be the words in the email, the sender's address, and the number of links. The **label** is a binary category: either 'Spam' (1) or 'Not Spam' (0). The model learns to predict this label for new emails.",
            "id": "208",
            "malformed": false,
            "title": "Features and Labels in Action",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! That describes unsupervised learning. Supervised learning requires labeled data.",
            "id": "38",
            "incorrectFeedback": "Incorrect. Supervised learning requires labels (the 'supervision') to learn.",
            "malformed": false,
            "statement": "Supervised learning algorithms find structures in datasets that have no pre-assigned labels or correct answers.",
            "title": "Supervised learning check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "When the label we want to predict is a continuous number (e.g. house price, temperature, stock value), the task is called **Regression**. The model outputs a numeric value along a infinite scale, rather than selecting from discrete categories.",
            "id": "209",
            "malformed": false,
            "title": "Predicting Continuous Values",
            "type": "theory"
          },
          {
            "bodyMarkdown": "When the label we want to predict is a category (e.g., 'Spam' vs 'Inbox', 'Dog' vs 'Cat' vs 'Bird'), the task is called **Classification**. The model outputs a probability score for each class, assigning the input to the class with the highest probability.",
            "id": "210",
            "malformed": false,
            "title": "Predicting Categories",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! Temperature is a continuous numerical value.",
                "id": "428",
                "isCorrect": true,
                "text": "Regression"
              },
              {
                "explanation": "Incorrect. Tomorrow's temperature isn't a category; it's a numeric scale.",
                "id": "429",
                "isCorrect": false,
                "text": "Classification"
              },
              {
                "explanation": "Incorrect. We are predicting a specific target label (temperature), so it's supervised.",
                "id": "430",
                "isCorrect": false,
                "text": "Unsupervised clustering"
              }
            ],
            "correctFeedback": "Great job! Numerical continuous predictions are Regression tasks.",
            "id": "46",
            "incorrectFeedback": "Think about whether tomorrow's temperature is a category or a continuous number.",
            "malformed": false,
            "question": "If you are building a model to predict the exact temperature for tomorrow, what type of task is this?",
            "title": "Regression vs Classification",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "Linear Regression is the simplest regression algorithm. It assumes a straight-line relationship between the input features and the output label. In a 2D space, it finds the 'line of best fit' (defined by the equation $y = mx + b$) that minimizes the distance to all data points.",
            "id": "211",
            "malformed": false,
            "title": "Linear Regression: The Basics",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Despite its name, Logistic Regression is used for **Classification** tasks. It takes inputs and outputs a probability score between 0 and 1 using a Sigmoid curve. If the probability is greater than 0.5, it classifies the input as class 1; otherwise, it classifies it as class 0.",
            "id": "212",
            "malformed": false,
            "title": "Logistic Regression: Binary Output",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "classification"
            ],
            "correctFeedback": "Correct! Logistic regression is indeed a classification algorithm.",
            "id": "44",
            "incorrectFeedback": "Does Logistic Regression output continuous numbers, or does it assign classes?",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! Logistic Regression predicts discrete categories.",
                "id": "431",
                "isCorrect": true,
                "text": "classification"
              },
              {
                "explanation": "Incorrect. It is not used to predict continuous numbers.",
                "id": "432",
                "isCorrect": false,
                "text": "regression"
              },
              {
                "explanation": "Incorrect. Clustering is unsupervised.",
                "id": "433",
                "isCorrect": false,
                "text": "clustering"
              }
            ],
            "prompt": "Despite containing the word 'regression' in its name, Logistic Regression is used for ______ tasks.",
            "title": "Classification algorithm",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "A Decision Tree is a supervised learning algorithm that works like a flowchart. It splits the dataset into subsets based on input feature values (e.g., 'Is income > $50k?'). Each branch represents a decision, leading to a leaf node which represents the final prediction.",
            "id": "213",
            "malformed": false,
            "title": "Decision Trees",
            "type": "theory"
          },
          {
            "bodyMarkdown": "A single Decision Tree can easily overfit the data. A **Random Forest** solves this by combining the predictions of hundreds of individual decision trees (an 'ensemble' method). The final output is determined by the majority vote of all the trees, creating a much more robust model.",
            "id": "214",
            "malformed": false,
            "title": "Random Forests",
            "type": "theory"
          },
          {
            "correctFeedback": "Perfect! You understand the differences between these core supervised models.",
            "id": "34",
            "incorrectFeedback": "Double-check the algorithm descriptions and match them again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "434",
                "isCorrect": true,
                "text": "Linear Regression ➔ Predicts continuous numbers using a line of best fit"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "435",
                "isCorrect": false,
                "text": "Linear Regression ➔ Classifies inputs into binary categories using a sigmoid function"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "436",
                "isCorrect": false,
                "text": "Logistic Regression ➔ Predicts continuous numbers using a line of best fit"
              }
            ],
            "pairs": [],
            "question": "Match the supervised learning algorithm to its behavior:",
            "scenario": "Differentiate between fundamental supervised models.",
            "title": "Match supervised algorithms",
            "type": "matching"
          }
        ]
      },
      {
        "id": "oaeevteaezo1qh3anuldie59",
        "slug": "machine-learning-basics-03",
        "name": "Classification vs Regression",
        "description": "Differentiate between outcome categories and continuous value prediction.",
        "sortOrder": 3,
        "emoji": "📈",
        "contentBlocks": [
          {
            "bodyMarkdown": "The distinction between Classification and Regression lies entirely in the type of output. Classification predicts a **discrete label** (category). Regression predicts a **continuous label** (quantity). Choosing the wrong one will lead to a model that cannot answer your business question.",
            "id": "223",
            "malformed": false,
            "title": "Core Differences",
            "type": "theory"
          },
          {
            "bodyMarkdown": "**Binary Classification** has only two categories (e.g. Yes/No, Spam/Not Spam). **Multi-Class Classification** has three or more categories (e.g. classifying animal photos into Dog, Cat, Panda, or Horse). Each category is mutually exclusive.",
            "id": "224",
            "malformed": false,
            "title": "Binary vs Multi-Class Classification",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! It is Binary Classification because there are only two possible classes.",
            "id": "40",
            "incorrectFeedback": "Incorrect. Since there are exactly two classes, it is binary classification.",
            "malformed": false,
            "statement": "Predicting whether a transaction is 'Fraudulent' or 'Legitimate' is an example of Multi-Class Classification.",
            "title": "Classification type check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "We cannot evaluate regression models using 'Accuracy' because a prediction is rarely 100% exact. Instead, we measure the error distance. Common metrics include **Mean Absolute Error (MAE)** (average error distance) and **Mean Squared Error (MSE)** (which penalizes larger errors heavily).",
            "id": "225",
            "malformed": false,
            "title": "Evaluating Regression Models",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Classification models are evaluated by how often they pick the correct class. We use metrics like **Accuracy** (correct predictions divided by total predictions) and a **Confusion Matrix** to see which specific classes are being mistaken for one another.",
            "id": "226",
            "malformed": false,
            "title": "Evaluating Classification Models",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! MSE evaluates regression errors.",
                "id": "446",
                "isCorrect": true,
                "text": "Mean Squared Error (MSE)"
              },
              {
                "explanation": "Incorrect. Accuracy measures correct vs incorrect category choices, not numeric distance.",
                "id": "447",
                "isCorrect": false,
                "text": "Accuracy"
              },
              {
                "explanation": "Incorrect. F1-score is a classification metric based on precision and recall.",
                "id": "448",
                "isCorrect": false,
                "text": "F1-Score"
              }
            ],
            "correctFeedback": "Great job! Numeric distance errors are measured using metrics like MSE or MAE.",
            "id": "48",
            "incorrectFeedback": "Remember that house values are continuous numbers, not categories.",
            "malformed": false,
            "question": "Which metric is appropriate for evaluating a model that predicts house values?",
            "title": "Regression evaluation check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "Distinct from Multi-Class, **Multi-Label Classification** allows a single input to be assigned multiple labels simultaneously. For example, a single article could be tagged with both 'Technology' and 'Finance' at the same time.",
            "id": "227",
            "malformed": false,
            "title": "Multi-Label Classification",
            "type": "theory"
          },
          {
            "bodyMarkdown": "In classification, the model creates a **decision boundary** separating the classes in feature space. In regression, the model creates a **line or surface of prediction** that passes through the data points as closely as possible.",
            "id": "228",
            "malformed": false,
            "title": "Predictive Boundaries",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "decision"
            ],
            "correctFeedback": "Perfect! The decision boundary is the line or curve where the classification prediction changes.",
            "id": "46",
            "incorrectFeedback": "Think of the word related to making a choice or 'deciding' a class.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! The classifier creates a decision boundary.",
                "id": "449",
                "isCorrect": true,
                "text": "decision"
              },
              {
                "explanation": "Incorrect. The boundary splits classes, it is called a decision boundary.",
                "id": "450",
                "isCorrect": false,
                "text": "regression"
              },
              {
                "explanation": "Incorrect. Decision boundaries can be non-linear depending on the model.",
                "id": "451",
                "isCorrect": false,
                "text": "linear"
              }
            ],
            "prompt": "A classifier creates a ______ boundary in the feature space to separate different classes.",
            "title": "Classification boundary",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "In machine learning pipelines, the output variable we want to predict is called the **target variable**. For classification, this target is categorical (string or integer labels). For regression, the target is numerical (floating point values).",
            "id": "229",
            "malformed": false,
            "title": "Target Variable Types",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Support Vector Machines can be used for both classification and regression. In classification, SVMs find the decision boundary (hyperplane) that maximizes the margin—the distance between the boundary and the closest data points of any class.",
            "id": "230",
            "malformed": false,
            "title": "Support Vector Machines (SVM)",
            "type": "theory"
          },
          {
            "correctFeedback": "Excellent! You matched the target variable types to their correct tasks.",
            "id": "36",
            "incorrectFeedback": "Review the difference between categorical classes and numerical values.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "452",
                "isCorrect": true,
                "text": "House Price ($350,000, $410,000, etc.) ➔ Regression Task"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "453",
                "isCorrect": false,
                "text": "House Price ($350,000, $410,000, etc.) ➔ Multi-Class Classification"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "454",
                "isCorrect": false,
                "text": "Animal Class (Cat, Dog, Fox) ➔ Regression Task"
              }
            ],
            "pairs": [],
            "question": "Match the target variable to the correct machine learning task type:",
            "scenario": "Identify the correct category of model based on the shape of the data target.",
            "title": "Match target and task",
            "type": "matching"
          }
        ]
      },
      {
        "id": "shp913jr4riqwi1wvub5833t",
        "slug": "machine-learning-basics-04",
        "name": "Features and Data Quality",
        "description": "See how feature selection, cleanliness, and coverage shape model performance.",
        "sortOrder": 4,
        "emoji": "🧹",
        "contentBlocks": [
          {
            "id": "theory_shp913jr4riqwi1wvub5833t_1",
            "type": "theory",
            "title": "Introduction to Features and Data Quality",
            "bodyMarkdown": "In this chapter, we delve into **Features and Data Quality** within the **Machine Learning Basics** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_shp913jr4riqwi1wvub5833t_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Features and Data Quality?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_shp913jr4riqwi1wvub5833t_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Features and Data Quality principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "x12o2mq031ldon4ts7vssq9b",
        "slug": "machine-learning-basics-05",
        "name": "Training and Validation",
        "description": "Learn how train-test splits and validation help measure generalization.",
        "sortOrder": 5,
        "emoji": "🧪",
        "contentBlocks": [
          {
            "id": "theory_x12o2mq031ldon4ts7vssq9b_1",
            "type": "theory",
            "title": "Introduction to Training and Validation",
            "bodyMarkdown": "In this chapter, we delve into **Training and Validation** within the **Machine Learning Basics** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_x12o2mq031ldon4ts7vssq9b_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Training and Validation?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_x12o2mq031ldon4ts7vssq9b_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Training and Validation principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "nzsjrfq7dec60chp7y8aohsg",
        "slug": "machine-learning-basics-06",
        "name": "Model Evaluation Metrics",
        "description": "Compare accuracy, precision, recall, and other metrics used in practice.",
        "sortOrder": 6,
        "emoji": "📐",
        "contentBlocks": [
          {
            "id": "theory_nzsjrfq7dec60chp7y8aohsg_1",
            "type": "theory",
            "title": "Introduction to Model Evaluation Metrics",
            "bodyMarkdown": "In this chapter, we delve into **Model Evaluation Metrics** within the **Machine Learning Basics** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_nzsjrfq7dec60chp7y8aohsg_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Model Evaluation Metrics?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_nzsjrfq7dec60chp7y8aohsg_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Model Evaluation Metrics principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "wp76xcn8ojdbrlemrhflvo7g",
        "slug": "machine-learning-basics-07",
        "name": "Overfitting and Underfitting",
        "description": "Recognize when models memorize too much or fail to learn enough from data.",
        "sortOrder": 7,
        "emoji": "⚖️",
        "contentBlocks": [
          {
            "id": "theory_wp76xcn8ojdbrlemrhflvo7g_1",
            "type": "theory",
            "title": "Introduction to Overfitting and Underfitting",
            "bodyMarkdown": "In this chapter, we delve into **Overfitting and Underfitting** within the **Machine Learning Basics** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_wp76xcn8ojdbrlemrhflvo7g_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Overfitting and Underfitting?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_wp76xcn8ojdbrlemrhflvo7g_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Overfitting and Underfitting principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "zzw6d70u7mdzqgx8szpsxk3w",
        "slug": "machine-learning-basics-08",
        "name": "From Model to Product",
        "description": "Connect machine learning concepts to deployment, monitoring, and iteration.",
        "sortOrder": 8,
        "emoji": "📦",
        "contentBlocks": [
          {
            "id": "theory_zzw6d70u7mdzqgx8szpsxk3w_1",
            "type": "theory",
            "title": "Introduction to From Model to Product",
            "bodyMarkdown": "In this chapter, we delve into **From Model to Product** within the **Machine Learning Basics** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_zzw6d70u7mdzqgx8szpsxk3w_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering From Model to Product?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_zzw6d70u7mdzqgx8szpsxk3w_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "From Model to Product principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      }
    ]
  },
  {
    "id": "prhp3184pzmbsl8yokbzwcpw",
    "slug": "data-science-essentials",
    "name": "Data Science Essentials",
    "description": "Explore data preparation, analysis, and storytelling techniques that support practical AI projects.",
    "difficulty": "Advanced",
    "estimatedMinutes": 120,
    "accessType": "free",
    "bannerSrc": "https://res.cloudinary.com/dvytn4u6i/image/upload/v1783524564/Chat_GPT_Image_Jul_8_2026_11_28_55_AM_2_eabb3c595d.png",
    "bannerAlt": "Data Science Essentials",
    "bannerWidth": 1254,
    "bannerHeight": 1254,
    "href": "/courses/data-science-essentials",
    "isFeatured": false,
    "sortOrder": 4,
    "chapters": [
      {
        "id": "r5h4f3zzt6kyqvuh4boutpx8",
        "slug": "data-science-essentials-01",
        "name": "Data Science Workflow",
        "description": "Map the end-to-end process from question framing to communication and action.",
        "sortOrder": 1,
        "emoji": "🗺️",
        "contentBlocks": [
          {
            "bodyMarkdown": "Data Science is the field of study that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. The lifecycle begins with a business question and ends with communicating insights or deploying a model.",
            "id": "319",
            "malformed": false,
            "title": "The Data Science Lifecycle",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Every data science project starts with a goal. For example, instead of asking 'Can we look at sales data?', ask: 'Which customer segments are most likely to buy our new product next month?'. A specific question determines what data you need to gather.",
            "id": "320",
            "malformed": false,
            "title": "Step 1: Ask a Clear Question",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! You must start with a clear, specific question to know what data to gather and analyze.",
            "id": "52",
            "incorrectFeedback": "Incorrect. Running models without a defined question leads to wasted effort and irrelevant outputs.",
            "malformed": false,
            "statement": "A data science project should start by running complex algorithms before defining a specific business question.",
            "title": "Workflow start check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "Once you know the question, you gather raw data from sources like databases, APIs, or files. Raw data is almost always messy and incomplete. You must clean it by removing duplicates, fixing errors, and handling missing values.",
            "id": "321",
            "malformed": false,
            "title": "Step 2: Collect and Clean Data",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Exploratory Data Analysis (EDA) involves calculating statistics (like averages and ranges) and creating plots (like histograms and scatter plots) to find patterns, anomalies, and correlations in the cleaned data.",
            "id": "322",
            "malformed": false,
            "title": "Step 3: Exploratory Data Analysis",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! EDA is exploring the data to find initial patterns.",
                "id": "554",
                "isCorrect": true,
                "text": "Exploratory Data Analysis (EDA)"
              },
              {
                "explanation": "Incorrect. Deployment happens at the end of the project, not during exploration.",
                "id": "555",
                "isCorrect": false,
                "text": "Model Deployment"
              },
              {
                "explanation": "Incorrect. Imputation is filling in missing values, which is part of data cleaning.",
                "id": "556",
                "isCorrect": false,
                "text": "Data Imputation"
              }
            ],
            "correctFeedback": "Excellent! EDA helps you understand the dataset before applying complex models.",
            "id": "60",
            "incorrectFeedback": "Review the definition of the exploration step in the workflow.",
            "malformed": false,
            "question": "What is the term for calculating statistics and plotting graphs to understand a new dataset's patterns?",
            "title": "EDA definition check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "If the project requires predictions, we build statistical or machine learning models. We train these models on historical data to predict future values or classify new observations.",
            "id": "323",
            "malformed": false,
            "title": "Step 4: Modeling and Machine Learning",
            "type": "theory"
          },
          {
            "bodyMarkdown": "The final step is translating the findings into clear, actionable recommendations. This involves creating dashboards, visualizations, and writing summaries for stakeholders who may not be technical.",
            "id": "324",
            "malformed": false,
            "title": "Step 5: Communicate Insights",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "communicating"
            ],
            "correctFeedback": "Correct! Insights are useless unless they are communicated effectively to decision-makers.",
            "id": "58",
            "incorrectFeedback": "What is the action of sharing or presenting your results?",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! You must communicate findings clearly.",
                "id": "557",
                "isCorrect": true,
                "text": "communicating"
              },
              {
                "explanation": "Incorrect. Cleaning is one of the initial stages.",
                "id": "558",
                "isCorrect": false,
                "text": "cleaning"
              },
              {
                "explanation": "Incorrect. Collection happens at the start of the lifecycle.",
                "id": "559",
                "isCorrect": false,
                "text": "collecting"
              }
            ],
            "prompt": "The final step in a data science project is ______ findings to stakeholders.",
            "title": "Workflow final step",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "Data science is rarely linear. While analyzing data (EDA) or building models, you will often discover new questions or data quality issues that force you to go back and collect more data or adjust your cleaning steps.",
            "id": "325",
            "malformed": false,
            "title": "Iterative Nature of the Workflow",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Algorithms alone are not enough. Understanding the domain (e.g. finance, healthcare, or marketing) is crucial to interpret the data correctly and avoid making false assumptions or drawing wrong conclusions.",
            "id": "326",
            "malformed": false,
            "title": "The Role of Domain Knowledge",
            "type": "theory"
          },
          {
            "correctFeedback": "Perfect! You understand the full data science lifecycle.",
            "id": "48",
            "incorrectFeedback": "Look at the pairings and try again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "560",
                "isCorrect": true,
                "text": "Data Collection ➔ Querying database tables or pulling information from web APIs"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "561",
                "isCorrect": false,
                "text": "Data Collection ➔ Creating scatter plots and calculating correlations to spot patterns"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "562",
                "isCorrect": false,
                "text": "EDA ➔ Querying database tables or pulling information from web APIs"
              }
            ],
            "pairs": [],
            "question": "Match the data science lifecycle stage to its key task:",
            "scenario": "Explore the different components of the data science workflow.",
            "title": "Match workflow stages",
            "type": "matching"
          }
        ]
      },
      {
        "id": "pmrj3uq7lzhbgop5anmdfe7e",
        "slug": "data-science-essentials-02",
        "name": "Collecting Useful Data",
        "description": "Identify the right sources, formats, and collection tradeoffs for analysis.",
        "sortOrder": 2,
        "emoji": "📥",
        "contentBlocks": [
          {
            "bodyMarkdown": "Data comes from diverse sources: **Internal Data** (from your app's transactional databases), **External Data** (public datasets, weather data), and **Third-Party APIs** (financial feeds, geolocation data).",
            "id": "335",
            "malformed": false,
            "title": "Data Sources",
            "type": "theory"
          },
          {
            "bodyMarkdown": "**Structured Data** is highly organized in tables with columns and rows (e.g., SQL databases, CSVs). **Unstructured Data** has no predefined format (e.g., emails, PDF reports, audio recordings, images). Structured data is much easier to analyze directly.",
            "id": "336",
            "malformed": false,
            "title": "Structured vs Unstructured Data",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! Spreadsheets are tabular and have predefined fields, making them structured data.",
            "id": "54",
            "incorrectFeedback": "Incorrect. Since it is organized into rows and columns, it is structured.",
            "malformed": false,
            "statement": "A spreadsheet table containing user names and email addresses is unstructured data.",
            "title": "Data type check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "Structured Query Language (SQL) is the standard language for retrieving data from relational databases. Using commands like `SELECT`, `WHERE`, and `JOIN`, you can extract specific rows and combine different tables to gather the features you need.",
            "id": "337",
            "malformed": false,
            "title": "Querying Databases with SQL",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Application Programming Interfaces (APIs) allow you to request data programmatically from other systems. Usually, APIs return data in **JSON** (JavaScript Object Notation), which is a flexible, nested text format that can be easily parsed.",
            "id": "338",
            "malformed": false,
            "title": "Collecting via APIs",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! JSON is the standard lightweight data exchange format.",
                "id": "572",
                "isCorrect": true,
                "text": "JSON"
              },
              {
                "explanation": "Incorrect. MP3 is an audio compression format, not a text data format.",
                "id": "573",
                "isCorrect": false,
                "text": "MP3"
              },
              {
                "explanation": "Incorrect. PDF is a document layout format, not suitable for structured API parsing.",
                "id": "574",
                "isCorrect": false,
                "text": "PDF"
              }
            ],
            "correctFeedback": "Good job! JSON is widely used for sending structured data over web APIs.",
            "id": "62",
            "incorrectFeedback": "Think about the common curly-braced text format used in web development.",
            "malformed": false,
            "question": "What is the most common text format returned by modern web APIs containing data?",
            "title": "API format check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "When data is visible on a website but not available via API, we use **Web Scraping**. Scraping scripts read the HTML code of a webpage and extract specific text elements. However, scraping can break if the website layout changes.",
            "id": "339",
            "malformed": false,
            "title": "Web Scraping",
            "type": "theory"
          },
          {
            "bodyMarkdown": "When collecting data, you must avoid **Selection Bias**—which occurs when your sample is not representative of the whole population. For example, conducting an online survey about internet access will automatically exclude people without internet.",
            "id": "340",
            "malformed": false,
            "title": "Data Quality and Selection Bias",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "selection"
            ],
            "correctFeedback": "Correct! Selection bias occurs during data collection and invalidates conclusions.",
            "id": "60",
            "incorrectFeedback": "Think of the term representing how we select or choose our sample.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! This is selection bias.",
                "id": "575",
                "isCorrect": true,
                "text": "selection"
              },
              {
                "explanation": "Incorrect. Confirmation bias is a psychological bias where one seeks confirming evidence.",
                "id": "576",
                "isCorrect": false,
                "text": "confirmation"
              },
              {
                "explanation": "Incorrect. Algorithmic bias occurs in models, selection bias occurs in data collection.",
                "id": "577",
                "isCorrect": false,
                "text": "algorithmic"
              }
            ],
            "prompt": "A sample that doesn't represent the general population suffers from ______ bias.",
            "title": "Bias category",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "**Quantitative Data** is numerical and can be measured (e.g. height, price, count). **Qualitative Data** is descriptive and represents categories or qualities (e.g. feedback text, eye color, satisfaction level).",
            "id": "341",
            "malformed": false,
            "title": "Quantitative vs Qualitative",
            "type": "theory"
          },
          {
            "bodyMarkdown": "A **Data Warehouse** stores highly structured, cleaned data optimized for quick business reporting. A **Data Lake** stores massive amounts of raw, unstructured data in its native format until it is needed for analysis.",
            "id": "342",
            "malformed": false,
            "title": "Data Warehouses vs Data Lakes",
            "type": "theory"
          },
          {
            "correctFeedback": "Perfect! You successfully matched these data collection terms.",
            "id": "50",
            "incorrectFeedback": "Check the mappings and try again.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "578",
                "isCorrect": true,
                "text": "Structured Data ➔ Tabular data stored in SQL databases with strict columns"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "579",
                "isCorrect": false,
                "text": "Structured Data ➔ Text documents, videos, and audio files without tabular structure"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "580",
                "isCorrect": false,
                "text": "Unstructured Data ➔ Tabular data stored in SQL databases with strict columns"
              }
            ],
            "pairs": [],
            "question": "Match the data term to its characteristic:",
            "scenario": "Review various data formats and storage concepts.",
            "title": "Match data terms",
            "type": "matching"
          }
        ]
      },
      {
        "id": "uaty5rg81yadumq4arsii2t7",
        "slug": "data-science-essentials-03",
        "name": "Cleaning and Preparing Data",
        "description": "Handle missing values, duplicates, formatting issues, and inconsistent records.",
        "sortOrder": 3,
        "emoji": "🧼",
        "contentBlocks": [
          {
            "bodyMarkdown": "Raw data is dirty. It contains duplicate records, typing errors, unrealistic outliers (like an age of 999), and blank values. Data cleaning ensures that your analysis and machine learning models are built on accurate facts.",
            "id": "351",
            "malformed": false,
            "title": "Why Clean Data?",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Duplicate rows occur due to system glitches, multiple submissions, or merging different databases. Removing duplicates is one of the first cleaning steps because duplicates artificially inflate count statistics and bias machine learning models.",
            "id": "352",
            "malformed": false,
            "title": "Identifying Duplicates",
            "type": "theory"
          },
          {
            "correctAnswer": false,
            "correctFeedback": "Correct! Duplicates give the model false weight on those repeated samples, leading to overfitting and incorrect accuracy metrics.",
            "id": "56",
            "incorrectFeedback": "Incorrect. Duplicates introduce bias and distort model evaluation.",
            "malformed": false,
            "statement": "Keeping duplicate rows in your training set is harmless and will not affect the model's accuracy.",
            "title": "Duplicate row check",
            "type": "true-false"
          },
          {
            "bodyMarkdown": "If some fields are blank, we can: 1. **Delete**: Remove the rows (if only a few are missing). 2. **Impute**: Fill in the blanks with the column's mean, median, or mode. 3. **Flag**: Replace with a constant like 'Unknown' to preserve the row.",
            "id": "353",
            "malformed": false,
            "title": "Handling Missing Values",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Data often contains inconsistencies, such as dates written in different formats (e.g. '07/11/2026' vs '2026-07-11') or inconsistent spelling ('USA', 'U.S.A.', 'United States'). Standardizing these formats is essential before grouping or sorting.",
            "id": "354",
            "malformed": false,
            "title": "Standardizing Formats",
            "type": "theory"
          },
          {
            "choices": [
              {
                "explanation": "Correct! Imputation replaces missing values with estimates.",
                "id": "590",
                "isCorrect": true,
                "text": "Imputation"
              },
              {
                "explanation": "Incorrect. Normalization scales numeric ranges, it doesn't fill missing blanks.",
                "id": "591",
                "isCorrect": false,
                "text": "Normalization"
              },
              {
                "explanation": "Incorrect. Encoding transforms text categories, it doesn't handle null values.",
                "id": "592",
                "isCorrect": false,
                "text": "One-Hot Encoding"
              }
            ],
            "correctFeedback": "Excellent! Imputation keeps your dataset size intact by replacing missing points.",
            "id": "64",
            "incorrectFeedback": "Recall the statistical term for replacing empty values.",
            "malformed": false,
            "question": "What is the term for filling in missing data values with statistical replacements like the median?",
            "title": "Missing data check",
            "type": "multiple-choice"
          },
          {
            "bodyMarkdown": "An **outlier** is a data point that is significantly different from the other observations in the dataset. Outliers can be caused by data entry errors (e.g. adding an extra zero) or represent genuine rare events.",
            "id": "355",
            "malformed": false,
            "title": "Detecting Outliers",
            "type": "theory"
          },
          {
            "bodyMarkdown": "If an outlier is a data entry error, it should be corrected or deleted. If it is genuine (e.g., a billionaire's income in a city income study), we might keep it but analyze it separately, or use models that are robust to outliers.",
            "id": "356",
            "malformed": false,
            "title": "Handling Outliers",
            "type": "theory"
          },
          {
            "acceptedAnswers": [
              "outlier"
            ],
            "correctFeedback": "Correct! Outliers must be inspected to ensure they aren't errors.",
            "id": "62",
            "incorrectFeedback": "Think of a word representing something that 'lies' 'out' on the edges.",
            "malformed": false,
            "options": [
              {
                "explanation": "Correct! This is an outlier.",
                "id": "593",
                "isCorrect": true,
                "text": "outlier"
              },
              {
                "explanation": "Incorrect. Imputation is a cleaning process, not a data point type.",
                "id": "594",
                "isCorrect": false,
                "text": "imputation"
              },
              {
                "explanation": "Incorrect. Inliers are normal points, not extreme ones.",
                "id": "595",
                "isCorrect": false,
                "text": "inlier"
              }
            ],
            "prompt": "A data point that is extremely far away from the rest of the dataset is called an ______.",
            "title": "Outlier definition",
            "type": "fill-in-the-blank"
          },
          {
            "bodyMarkdown": "Sometimes numeric values are read as text strings (e.g. '$100' instead of 100). We must clean these columns by removing currency symbols and converting the column data type to floats or integers.",
            "id": "357",
            "malformed": false,
            "title": "Data Type Conversions",
            "type": "theory"
          },
          {
            "bodyMarkdown": "Dates stored as strings cannot be used for time-based comparisons. Parsing strings into Datetime objects allows us to extract day, week, month, and compare intervals easily.",
            "id": "358",
            "malformed": false,
            "title": "Parsing Dates",
            "type": "theory"
          },
          {
            "correctFeedback": "Perfect! You know exactly how to clean messy raw datasets.",
            "id": "52",
            "incorrectFeedback": "Look at the problems and solutions again, then match.",
            "malformed": false,
            "mode": "options",
            "options": [
              {
                "explanation": "Correct! That is the right matching pairing.",
                "id": "596",
                "isCorrect": true,
                "text": "Typos in country names (USA, United States) ➔ Standardize spelling to a single consistent format"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "597",
                "isCorrect": false,
                "text": "Typos in country names (USA, United States) ➔ Impute missing cells with the column median"
              },
              {
                "explanation": "Incorrect. That pairing is wrong.",
                "id": "598",
                "isCorrect": false,
                "text": "Age values containing empty cells ➔ Standardize spelling to a single consistent format"
              }
            ],
            "pairs": [],
            "question": "Match the data issue to the correct cleaning action:",
            "scenario": "Choose the correct data cleaning strategy for each issue.",
            "title": "Match cleaning actions",
            "type": "matching"
          }
        ]
      },
      {
        "id": "c87of66sw87pogr4q83618o3",
        "slug": "data-science-essentials-04",
        "name": "Exploratory Analysis",
        "description": "Use simple summaries and patterns to understand what your dataset is telling you.",
        "sortOrder": 4,
        "emoji": "🕵️",
        "contentBlocks": [
          {
            "id": "theory_c87of66sw87pogr4q83618o3_1",
            "type": "theory",
            "title": "Introduction to Exploratory Analysis",
            "bodyMarkdown": "In this chapter, we delve into **Exploratory Analysis** within the **Data Science Essentials** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_c87of66sw87pogr4q83618o3_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Exploratory Analysis?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_c87of66sw87pogr4q83618o3_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Exploratory Analysis principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "cx3oo7molprdf55gq66pioj6",
        "slug": "data-science-essentials-05",
        "name": "Visualization Basics",
        "description": "Choose charts that communicate comparisons, trends, distribution, and relationships.",
        "sortOrder": 5,
        "emoji": "📊",
        "contentBlocks": [
          {
            "id": "theory_cx3oo7molprdf55gq66pioj6_1",
            "type": "theory",
            "title": "Introduction to Visualization Basics",
            "bodyMarkdown": "In this chapter, we delve into **Visualization Basics** within the **Data Science Essentials** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_cx3oo7molprdf55gq66pioj6_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Visualization Basics?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_cx3oo7molprdf55gq66pioj6_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Visualization Basics principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "zgi9iweu85tctm1fqw3cbku9",
        "slug": "data-science-essentials-06",
        "name": "Interpreting Results",
        "description": "Separate signal from noise and avoid overclaiming from weak or incomplete evidence.",
        "sortOrder": 6,
        "emoji": "💡",
        "contentBlocks": [
          {
            "id": "theory_zgi9iweu85tctm1fqw3cbku9_1",
            "type": "theory",
            "title": "Introduction to Interpreting Results",
            "bodyMarkdown": "In this chapter, we delve into **Interpreting Results** within the **Data Science Essentials** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_zgi9iweu85tctm1fqw3cbku9_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Interpreting Results?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_zgi9iweu85tctm1fqw3cbku9_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Interpreting Results principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "k4lqubylbp271yxs55i5lmtf",
        "slug": "data-science-essentials-07",
        "name": "Storytelling With Data",
        "description": "Turn findings into a clear narrative that supports decisions and next steps.",
        "sortOrder": 7,
        "emoji": "📖",
        "contentBlocks": [
          {
            "id": "theory_k4lqubylbp271yxs55i5lmtf_1",
            "type": "theory",
            "title": "Introduction to Storytelling With Data",
            "bodyMarkdown": "In this chapter, we delve into **Storytelling With Data** within the **Data Science Essentials** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_k4lqubylbp271yxs55i5lmtf_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Storytelling With Data?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_k4lqubylbp271yxs55i5lmtf_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Storytelling With Data principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      },
      {
        "id": "fxcfc96mslp68wugvik025mm",
        "slug": "data-science-essentials-08",
        "name": "Data Science for AI Projects",
        "description": "Apply data science habits to improve AI system inputs, testing, and outcomes.",
        "sortOrder": 8,
        "emoji": "🔮",
        "contentBlocks": [
          {
            "id": "theory_fxcfc96mslp68wugvik025mm_1",
            "type": "theory",
            "title": "Introduction to Data Science for AI Projects",
            "bodyMarkdown": "In this chapter, we delve into **Data Science for AI Projects** within the **Data Science Essentials** curriculum. Understanding this concept empowers you to build robust, scalable, and intelligent applications."
          },
          {
            "id": "quiz_fxcfc96mslp68wugvik025mm_1",
            "type": "multiple-choice",
            "title": "Concept Mastery",
            "question": "What is the primary benefit of mastering Data Science for AI Projects?",
            "choices": [
              {
                "id": "opt_1",
                "text": "Enables systematic problem solving and predictable outcomes",
                "isCorrect": true,
                "explanation": "Correct! Mastering core principles leads to predictable, high-quality results."
              },
              {
                "id": "opt_2",
                "text": "Eliminates the need for testing or verification",
                "isCorrect": false,
                "explanation": "Testing and validation are always necessary."
              },
              {
                "id": "opt_3",
                "text": "Requires zero compute resources or parameters",
                "isCorrect": false,
                "explanation": "All computational systems require parameters and processing."
              }
            ],
            "correctFeedback": "Outstanding! You grasped the core takeaway."
          },
          {
            "id": "tf_fxcfc96mslp68wugvik025mm_1",
            "type": "true-false",
            "title": "Quick Fact Check",
            "statement": "Data Science for AI Projects principles apply across modern AI engineering frameworks.",
            "correctAnswer": true,
            "correctFeedback": "Spot on! These foundations remain universal across frameworks."
          }
        ]
      }
    ]
  }
];
