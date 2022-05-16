// ipo - input Proces Output


// constants and Variables (state)
let skills

// Cached Element References

const $button = $('button')
const $ul = $('ul')
const $input = $('input')

// Event Listeners

$button.on('click',handleAddSkill)
$ul.on('click','span', handleDelete)

// functions
init();
function init(){
    skills =[];
    render();

}
function handleAddSkill (){
//   Store value from the input tag inside a local variable

const skill = $input.val()
// Check to make sure we have skill date
if(skill) {
    // create the UI for a skill
    const $skill = $(`<li><span>X</span> ${skill} </li>`);
    // push the skillUI into the skills list
    skills.push($skill);
    // clear the input tag's value
    $input.val('');
    // render()
    render()
} else return;

}
function handleDelete (){
    let $deleteLi = $(this).closest('li');
    console.log($deleteLi.html())
    for (let i = 0 ; i<skills.length; i++){
        if(skills[i].html() === $deleteLi.html()){
                                    skills.splice(i,1)
                                    }
    }
    
    render();
}

function render(){
// Take the list of skills in the skills array and add them to the Ul tag
if(!skills.length) $ul.css('margin-bottom','30px');
else $ul.css('margin-bottom','0px');
$ul.html(skills)
}