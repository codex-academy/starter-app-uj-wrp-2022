document.addEventListener('alpine:init', () => {
    //

    Alpine.data('cars', function(){
        return {
            name : 'Cars',
            makes : [{
                id: 1,
                name : "Ford"
            }],
            makeId : 0,
            makeSelected(){
                alert(this.makeId)
            },
            init() {
                axios
                    .get('/api/makes')
                    .then((result) => {
                        const makes = result.data.makes;
                        this.makes = makes;
                    })
            }
        }
    });

    Alpine.data('movies', function(){
        return {
            name : 'Movies'
        }
    });

    Alpine.data('taxis', () => ({
        name : 'Taxis'
    }));


})