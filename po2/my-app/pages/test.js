export default function test() {


    async function input(e) {
        e.preventDefault();
        const [numone] = e.target.elements;
        console.log(numone.value)
    };

    async function two(e){
        e.preventDefault();
        const [numthree,numtwo] = e.target.elements;
        var z = numthree.value * numtwo.value
        console.log(z)
    };


    return (
        <>
            <body className="register body">
                <br></br>
                <br></br>
                <div className="container accordion-body  lgback">
                    <div className="row lgback">
                        <form class="mb-3" onSubmit={input} >
                            <label for="" class="form-label">Name</label>
                            <input type="text" name="numone" id="" aria-describedby="helpId" placeholder="" />
                            <input id="" type="submit" value="Button" />
                        </form>
                        <form class="mb-3" onSubmit={two} >
                            <label for="" class="form-label">two</label>
                            <input type="text" name="numtwo" id="" aria-describedby="helpId" placeholder="" />
                
                            <input type="text" name="numthree" id="" aria-describedby="helpId" placeholder="" />
                            <input id="" type="submit" value="Button" />
                        </form>
                    </div>
                </div>
            </body>

        </>
    )
}