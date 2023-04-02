
const quizData=[
    {
        question: '“Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir?',
        a: 'Reşat Nuri Güntekin',
        b: 'Halide Edip Adıvar',
        c: 'Ziya Gökalp',
        d: 'Ömer Seyfettin',
        e: 'Peyami Safa',
        correct: 'b',
        },
        {
        question: 'Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir?',
        a: 'Hititler',
        b: 'Elamlar',
        c: 'Sümerler',
        d: 'Urartular',
        e: 'Frigler',
        correct:'c',
        },
        {
         question:'Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi ?',
         a:'Endonezya',
         b:'Srilanka',
         c:'Tayland',
         d:'Hindistan',
         e:'Çin',
         correct: 'a',
        },
        {
         question:'Cevdet Bey ve Oğulları Eseri Kime Aittir?',
         a:'Orhan Pamuk',
         b:'Yahya Kemal Bayatlı',
         c:'Samipaşazade Sezai',
         d:'Atilla İlhan',
         e:'Sabahattin Ali',
         correct:'a',
        },
        {
         question:'"Labirentin Gölgesinde" ve "Sembollerin Gölgesinde" adlı fantastik romanların yazarı kimdir?',
         a:'Haldun Taner',
         b:'Mehmet Rauf',
         c:'Yaşar Kemal',
         d:'Yahya Karakurt',
         e:'Ahmet Hamdi Tanpınar',
         correct:'d',
        }
    
]

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const e_text=document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
 const currentQuizData = quizData[currentQuiz]
 
 deselectedAnswers()

 questionEl.innerText=currentQuizData.question
 a_text.innerText=currentQuizData.a
 b_text.innerText=currentQuizData.b
 c_text.innerText=currentQuizData.c
 d_text.innerText=currentQuizData.d
 e_text.innerText=currentQuizData.e
}

function deselectedAnswers(){
    answerEls.forEach((answerEl) => (answerEl.checked = false))
}

function getSelected(){
   let answer

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
   //console.log(answer)


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      `

        }

        
    }
})


