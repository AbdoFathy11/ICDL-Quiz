const questions = [
    {
        arapic: {
            question: "أي من الاتي يًعد سوفت وير ؟",
            options: ["برامج الكمبيوتر", "الشبكة اللاسلكية", "وحدة التخزين الخارجية", "الجهاز الملحق"],
            correctAnswer: 0 // الإجابة أول عنصر في المصفوفة "برامج الكمبيوتر" لذلك 0 يشير إليها
        },
        english: {
            question: "Which one of the following answers is software ?",
            options: ["Computer Programs", "A Wireless Network", "An External Storage", "An Accessory Device"],
            correctAnswer: 0
        }
    }, 
    {
        arapic: {
            question: "أي من الاتي يصف شبكة لاسلكية تحتاج إلى كلمة مرور للوصول لها ؟",
            options: ["شبكة مغلقة", "شبكة محمية", "شبكة معطلة", "شبكة مفتوحة"],
            correctAnswer: 1 
               },
        english: {
            question: "Which one of the following answers describes a wireless network that requires a password to access it ?",
            options: ["Closed Network", "Protected Network", "Disabled Network", "Open Network"],
            correctAnswer: 1
        }
    }, 
    {
        arapic: {
            question: "أي مما يلي هو أفضل وصف يوضح الغرض الأساسي من شبكات الحاسوب ؟",
            options: ["لتشغيل الموسيقى", "لإنشاء شاشة توقف", "لمشاركة البينات والأجهزة والوصول الامن", "للتنقل فيما بين البرامج"],
            correctAnswer: 2 
               },
        english: {
            question: "Which one of the following answers is the best describtion that show the main purpose of computer network ?",
            options: ["To Play Music", "To Create a Screen Saver", "To Share and Access Data and Devices Securely", "Mobility between Programs"],
            correctAnswer: 2
        }
    }, 
    {
        arapic: {
            question: "أي من العبارات الاتية يعد صحيحاً عن الشبكة العنكبوتية (الإنترنت) ؟",
            options: ["مجموعة كبيرة من المستندات", "شبكة ضخمة من أجهزة الحاسوب المرتبطة ببعضها البعض ومنتشرة حول العالم", "مجموعة من صفحات الويب", "لغة برمجة بسيطة تستخدم المتصفحات لعرض صفحات الويب"],
            correctAnswer: 1 
               },
        english: {
            question: "Which one of the following answers is true about internet ?",
            options: ["A Large Collection of Documents", "A network of computers connected to each other and distributed around the world", "A collection of web pages", "A simple programming language that uses browsers to display web pages"],
            correctAnswer: 1
        }
    }, 
]
console.log(questions.length)