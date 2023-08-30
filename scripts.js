members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            NewMember:{ }
        }
    },
    methods:{
        addMember(){
            if(this.NewMember.fname && this.NewMember.lname && this.NewMember.instrument){
                this.members.push(this.NewMember);
                this.NewMember={}
            }else{
                alert('Por favor preencha todos os campos.')
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
