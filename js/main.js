const newLocal = 'name-list';
Vue.component(newLocal,{
    props:['person'],
    template: `
    <ul>
        <li v-for="names in person">{{ names.name }}</li>
    </ul>
    `
});
new Vue({
    el:"#root",
    component:[
        'name-list'
    ],
    data:{
        person: [
            {name: "mike"},
            {name: "teddy"}
        ],
        newName: ''
    },
    methods:{
        addName: function(){
            return this.person.push({name: this.newName});
            this.newName = ''
        }
    },
    filters:{
        cap:function(value){
            return value.toUpperCase()
        },
        yoify: function(value){
            return value +" "+ 'yo' 
        }
    },
    computed:{
        comp: function(){
            if(this.newName== "mike" || this.newName == "teddy"){
                return this.newName +  " " + "yo"
            }else{
                return "can't yoify"
            }
        }
    }
     
});

function newFunction() {
    return "<h1>hello world</h1>";
}
