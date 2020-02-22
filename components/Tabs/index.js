// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tabs(topic, name=null) {
    const tabWrap = document.createElement('div');
    tabWrap.classList.add('tab');
    tabWrap.setAttribute('data-name', topic);
    tabWrap.textContent = (name!=null) ? name : topic;

    return tabWrap;
}

const topicsContainer = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => { 
        console.log(response.data);
        response.data.topics.forEach((topic) => {
            if(topic==='node.js') {
                topicsContainer.append(Tabs('node', 'node.js'));
                return;
            }
            topicsContainer.append(Tabs(topic));
        });

        const tabs = Array.prototype.slice.call(document.querySelectorAll('.topics .tab'));
        tabs.forEach((tab) => {
            //console.log(tab);
            tab.addEventListener('click', (e) => {
                let activeTab = e.target.attributes[1].value;

                document.querySelectorAll(`.cards-container .card`).forEach((card) => {
                    if(card.getAttribute('data-name') === activeTab) {
                        card.style.display = 'block'
                    } else {
                        card.style.display = 'none';
                    }
                    
                });
            });
        }); 

    })
    .catch((err) => { 
        console.log(err);
    });