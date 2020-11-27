// HTML class selection for JavaScript text Insertion 

const chefsTextH2 = document.querySelector('.chefsTextH2');
const chefsTextP = document.querySelector('.chefsTextP'); 
const moreInfo = document.querySelector('.moreInfo'); 

// Gino

const chef1 = document.querySelector('.chef1');

chef1.addEventListener('click', function() {
    chefsTextH2.textContent = `Hi, Im Gino!!`;
    chefsTextP.textContent = `this is a chef's text1, press g (for Gino) for more info`;
    moreInfo.textContent = ` `; 
    console.log(`Gino`);


window.addEventListener('keydown', handleKeyDown); 
function handleKeyDown(event) {
    if (event.key === 'g') {

        /* Same output as button click */ 

        chefsTextH2.textContent = `Hi, Im Gino!!`;
        chefsTextP.textContent = `this is a chef's text1, press g (for Gino) for more info`;
        moreInfo.textContent = ` `; 
        console.log(`Gino`);

        /* Extra Info */ 
        
    console.log(event.key);
    moreInfo.textContent = `Here is some additional info on Gino`;
    }}; 
});



// Gordon

const chef2 = document.querySelector('.chef2'); 

chef2.addEventListener('click', function() { 
    chefsTextH2.textContent = `Hi, Im Gordon!!`
    chefsTextP.textContent = `this is a chef's text2, press r for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Gordon Ramsey');
}); 


window.addEventListener('keydown', handleKeyDownR)
function handleKeyDownR (event) {
    if (event.key === 'r') {
    console.log(event.key);
    moreInfo.textContent = `Here is some additional info on Gordon Ramsey`;
    
    // Gordon 
    
    chefsTextH2.textContent = `Hi, Im Gordon!!`
    chefsTextP.textContent = `this is a chef's text2, press r for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Gordon Ramsey');
    }}

    
// Hugh

const chef3 = document.querySelector('.chef3');

chef3.addEventListener('click', function() {
    chefsTextH2.textContent = `Hi, I'm Hugh!!`;
    chefsTextP.textContent = `this is a chef's text3, press h for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Hugh');
});

window.addEventListener('keydown', handleKeyDownH) 
function handleKeyDownH(event){
        if (event.key === 'h') {
            console.log(event.key);
            moreInfo.textContent = `Here is some additional info on Hugh`;
            
            chefsTextH2.textContent = `Hi, I'm Hugh!!`;
            chefsTextP.textContent = `this is a chef's text3, press h for more info`; 
            moreInfo.textContent = ` `; 
            console.log('Hugh');
            }};

   

// Jamie

const chef4 = document.querySelector('.chef4');

chef4.addEventListener('click', function() {
    chefsTextH2.textContent = `Hi! Im Jamie!!`;
    chefsTextP.textContent = `this is a chef's text4, press o for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Jamie Oliver');
});

window.addEventListener('keydown', handleKeyDownO); 
function handleKeyDownO(event){
if (event.key === 'o') {
    console.log(event.key);
    moreInfo.textContent = `Here is some additional info on Jamie`;
    
    chefsTextH2.textContent = `Hi! Im Jamie!!`;
    chefsTextP.textContent = `this is a chef's text4, press o for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Jamie Oliver');
    
    }}; 

// Jeff

const chef5 = document.querySelector('.chef5');

chef5.addEventListener('click', function() {
    chefsTextH2.textContent = `Hi, I'm Jeff!!`;
    chefsTextP.textContent = `this is a chef's text5, press j for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Here is some info on chef5, next time, get it to appear as a div in the middle of the page');
});



window.addEventListener('keydown', handleKeyDownJ);
function handleKeyDownJ (event){
                if (event.key === 'j') {
                    console.log(event.key);
                    moreInfo.textContent = `Here is some additional info on Jeff`; 
                    chefsTextH2.textContent = `Hi, I'm Jeff!!`;
    chefsTextP.textContent = `this is a chef's text5, press j for more info`; 
    moreInfo.textContent = ` `; 
    console.log('Here is some info on chef5, next time, get it to appear as a div in the middle of the page');
                    }}

           /*
           More Jeff Chef Text 

           */ 

// Ming

const chef6 = document.querySelector('.chef6');

chef6.addEventListener('click', function() {
    chefsTextH2.textContent = `Hi! I'm Ming!!`; 
    chefsTextP.textContent = `this is a chef's text6, press m for more info`;
    moreInfo.textContent = ` `; 
    console.log('Here is some info on chef6, next time, get it to appear as a div in the middle of the page');
}); 

window.addEventListener('keydown', handleKeyDownM);
function handleKeyDownM (event){
                 if (event.key === 'm') {
                    console.log(event.key);
                    moreInfo.textContent = `Here is some additional info on Ming`;
                    chefsTextH2.textContent = `Hi! I'm Ming!!`; 
    chefsTextP.textContent = `this is a chef's text6, press m for more info`;
    moreInfo.textContent = ` `; 
    console.log('Here is some info on chef6, next time, get it to appear as a div in the middle of the page'); 
                    }};
 
