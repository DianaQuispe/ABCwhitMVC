let game = [
  {
    id: 1,
    question: "Which is the oldest airline in the world?",
    answers: ["Avianca", "KLM", "Qantas"],
    answerGood: "KLM",
    image: " assets/images/plane.svg"
  },
  {
    id: 2,

    question: "Which is the largest port in the world?",
    answers: ["Port of Shanghai", " Port of Singapore", "Port of Rotterdam"],

    answerGood: "KLM",
    image: " assets/images/ship.svg"
  },

  {
    id: 3,

    question: "What is the longest distance cycling backwards?",
    answers: ["89.30km", "675.10km", "337.60km"],
    answerGood: "KLM",
    image: " assets/images/bycicle.svg"
  },
  {
    id: 4,

    question: "What is the highest speed ever reached by a school bus?",
    answers: ["590 km/h", "320 km/h", "245 km/h"],
    answerGood: "KLM",
    image: " assets/images/bus.svg"
  },
  {
    id: 5,

    question: "What is the longest car trip on one tank of gas?",
    answers: ["2617 km", "3568 km", "1732 km"],
    answerGood: "KLM",
    image: " assets/images/truck.svg"
  }
];
// { A: "Avianca", B: "KLM", C: "Qantas" },
class Model {
   constructor () {
     this.num = 0;
      this.todos = game[this.num];
      console.log( this.todos)
       this.newFunction();
      this.render = undefined; // no definido
   }
  
   subscribe(render) {
      this.render = render;
   }
   inform() {
      console.log( this.todos.map(e => e.text));
      console.log(this.todos.map((e, i )=> i));

      this.render(); // llama a render que solo actualiza
      this.num++;
   }

   updateTodo(index, todo) {
      this.todos[index] = todo; // el array en la posicion index = todo
      this.inform();
   }
//    model() {
//        constructor () {
//            this.example = {
          
//            question:  question,
//            answer : answer,
//             }
//        }
//    }
    newFunction() {
   
      function functionMas() {
        alert('d');
      }
        // this.inputValue = null; //  vacio
    }
 
}

const App = ({ title, model, game }) => { 
 
    // const items = model.todos.map((todo, index) => {
      // const answe = model.todos.answers.map(a => {
        // return

        // console.log(a);
      // });
      //  console.log("id:" + todo.id, "questions:" + todo.question, "answer:" + todo.answers, "answer:" + todo.answerGood);
      //  console.log("index:" + index);
      // return(
      // <div>
     
      // </div>)

    // });
   return <section>
       <div className="contenedor container-fluid text-center">
         <div className="row">
           <div className="col-md-12">
             <div id="divInterno">
               <div className="row">
                 <div id="questions">
                 <div >
      {model.todos.question}
      </div>
        <div className="col-md-12 container-fluid">
          <div className="answers row">
          <div>
            <button onClick={(model) => model.newFunction }>
              {model.todos.answers[model.num]}
            </button>
          </div>
          </div>
        </div>
        <div>
          <img src={model.todos.image} width="250" height="250" />
        </div>
                 </div>
               </div>
               <div />
             </div>
           </div>
         </div>
       </div>
     </section>;
};

let model = new Model();
let counter = 1;


let render = () => {
   console.log('render times: ', counter++);
   ReactDOM.render(  
      <App title="TodoApp" model={model} game={game} />,
      document.getElementById('container')
   );
};
//La etiqueta es la vista y la propiedad es la clase
model.subscribe(render);
render(); 