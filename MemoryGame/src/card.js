var test = [];
var parents = [];
var score = 0;
var score2 = 0;
var n = -1;
var f = 0;
var c = 0;
var p = 0;
Vue.component('card', {
    template: `
    <div class="cardboard" id="nice" style="width: 400px;">
        <div class="outer" v-on:click="flip">
            <div class="card front" id="myDiv" v-bind:style="{ transform: flipped? 'rotateY(180deg)': 'none', display: removed? 'none': '' }">
                <img src="images/css.jpg">
            </div>
            <div class="card back" v-bind:style="{ transform: flipped? 'rotateY(180deg)': 'none', display: removed? 'none': '' }"></div>
        </div>
    </div>,
    `,
    
    data: function() {
        return {
            flipped: false,
            removed: false,
        
        
        };
    },
    methods: {
        flip: function(){


            document.getElementById("flips").innerHTML = "Total Flips: " + (c+1);


            if(this.flipped) {
                this.flipped = false;
            }
            else {
                p++;
                c++;
                this.flipped = true;
                test.push(document.querySelectorAll('#myDiv img')[0].src);
                parents.push(this)
            }

            if(test.length > 1) {


                if(test[1] == test[0]) {
                    setTimeout(() => {
                        p--;
                        p--;
                        f ++;
                        console.log(p)
                        parents[1].removed = true;
                        parents[0].removed = true;
                    }, 1000);

                    if(p % 4 == 0) {
                        score2 += 100;
                        document.getElementById('p2').innerHTML = "Player 2: " + score2;
                    }
                    else if (p % 2 == 0) {
                        score += 100;
                        document.getElementById('p1').innerHTML = "Player 1: " + score;
                        
                    }

                    setTimeout(() => {
                        if (f==6 && score > score2) {
                            alert("Player 1 Won!")
                        }
                        else if ( f == 6 && score2 > score) {
                            alert("Player 2 Won!")
                        }
                        else if (f == 6 && score == score2) {
                            alert("It's a tie!")
                        }
                    }, 1070);

                }
                else if (test[1] != test[0]) {
                    parents[1].flipped = true;
                    parents[0].flipped = true;
                    setTimeout(() => {
                        parents[1].flipped = false;
                        parents[0].flipped = false;
                    }, 1000);

                }

                setTimeout(() => {
                    if(p % 4 == 0) {
                        document.getElementById('turn').innerHTML = "Player 1's Turn To Move!";
                    }
                    else if (p % 2 == 0) {
        
                        document.getElementById('turn').innerHTML = "Player 2's Turn To Move!";
                        
                    }
                }, 1000);

                setTimeout(() => {
                    test = [];
                    parents = [];
                }, 1050);

            }
    

        }

        
    }
})
Vue.component('card2', {
    template: `
    <div class="cardboard" id="nice" style="width: 400px;">
        <div class="outer" v-on:click="flip">
            <div class="card front" id="myDiv2" v-bind:style="{ transform: flipped? 'rotateY(180deg)': 'none', display: removed? 'none': '' }">
                <img src="images/bro.jpg">
            </div>
            <div class="card back" v-bind:style="{ transform: flipped? 'rotateY(180deg)': 'none', display: removed? 'none': '' }"></div>
        </div>
    </div>,
    `,
    
    data: function() {
        return {
            flipped: false,
            removed: false,
        
        
        };
    },
    methods: {
        flip: function(){

            document.getElementById("flips").innerHTML = "Total Flips: " + (c+1);
            
            if(this.flipped) {
                this.flipped = false;
            }
            else {
                p++;
                c++;
                this.flipped = true;
                test.push(document.querySelectorAll('#myDiv2 img')[0].src);
                parents.push(this)
            }

            if(test.length > 1) {
                

                if(test[1] == test[0]) {
                    p--;
                    p--;
                    f ++;
                    console.log(p)
                    setTimeout(() => {
                        parents[1].removed = true;
                        parents[0].removed = true;
                    }, 1000);

                    if(p % 4 == 0) {
                        score += 100;
                        document.getElementById('p1').innerHTML = "Player 1: " + score;
                    }
                    else if (p % 2 == 0) {
                        score2 += 100;
                        document.getElementById('p2').innerHTML = "Player 2: " + score2;
                        
                    }

                    setTimeout(() => {
                        if (f==6 && score > score2) {
                            alert("Player 1 Won!")
                        }
                        else if ( f == 6 && score2 > score) {
                            alert("Player 2 Won!")
                        }
                        else if (f == 6 && score == score2) {
                            alert("It's a tie!")
                        }
                        
                    }, 1002);


                }
                else if (test[1] != test[0]) {
                    parents[1].flipped = true;
                    parents[0].flipped = true;
                    setTimeout(() => {
                        parents[1].flipped = false;
                        parents[0].flipped = false;
                    }, 1000);

                }

                setTimeout(() => {
                    if(p % 4 == 0) {
                        document.getElementById('turn').innerHTML = "Player 1's Turn To Move!";
                    }
                    else if (p % 2 == 0) {
        
                        document.getElementById('turn').innerHTML = "Player 2's Turn To Move!";
                        
                    }
                    
                }, 1000);
                
                setTimeout(() => {
                    test = [];
                    parents = [];
                }, 1050);
            }

    
        }

        



            
    }
})