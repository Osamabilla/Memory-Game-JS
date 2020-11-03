import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*            if (this.flipped){
                c ++;
                this.flipped = false;
                document.getElementById('p1').innerHTML = "Player 1: " + c;

            }
            else {
                n ++;
                c++;
                this.flipped = true;
                test.push(document.querySelectorAll('#myDiv img')[0].src);
                parents.push(this);

                for (i=0; i<2, i++;) {
                    this.flipped = true;
                    test.push(document.querySelectorAll('#myDiv img')[0].src);
                    if (test[i] == test[i-1])
                    {   
                        parents[n].removed = true
                        parents[n-1].removed = true
    
                    } 
                }

                if (test[n] == test[n-1])
                {   
                    parents[n].removed = true
                    parents[n-1].removed = true

                } 
                else if (test[n] != test[n-1]) {
                    document.getElementById('p1').innerHTML = "Player 1: " + c;
                    parents[n].flipped = true
                    parents[n-1].flipped = true
                    setTimeout(() => {
                      parents[n].flipped = false  
                      parents[n-1].flipped = false
                    }, 1000);

                    test.push(null);
                    parents.push(null);
                    test.push(null);
                    parents.push(null);
 
                    
                }  

            }


        }

        
    } */ 