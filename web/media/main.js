var app = new Vue ({

    el: '#app',

    data() {
        return {
            
            imatges: [],
            paraula: ''

        }
    },

    mounted() {
        
        axios.get('https://www.instagram.com/explore/tags/viceroy/?__a=1')
        .then(result => (this.imatges = result.data))

    },

    methods: {
        
        apicall: function() {

            axios.get('https://www.instagram.com/explore/tags/'+this.paraula+'/?__a=1')
            .then(result => (this.imatges = result.data))
            document.getElementById("gridimatges").style.display = "block";

        }
        

    },

})


