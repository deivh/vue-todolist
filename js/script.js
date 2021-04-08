function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'todoAll' : 
                        ["Fare La Spesa",
                         "Completare l'esercizio Boolean",
                         "Giocare a Final Fantasy XIV",
                         "Cenare",
                         "Dormire",
                         "Ripetere il tutto",
                        ],
            'newTodo' : '',

        },
        methods: {
            createTodo: function (){
                if (this.newTodo != '') {
                    this.todoAll.push(this.newTodo);
                    this.newTodo = ''
                }
            },
            deleteTodo: function(i){
                this.todoAll.splice(i, 1);
            }
        }
    })}

    function init() {
        initVue();
    
    }
    $(init);