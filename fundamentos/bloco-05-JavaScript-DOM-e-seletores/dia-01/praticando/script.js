document.getElementById("header-container").style.backgroundColor = 'Green';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'salmon';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
    for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
    }

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
    for (let i = 0; i < noEmergencyTasks.length; i += 1) {
        noEmergencyTasks[i].style.backgroundColor = 'black';
    }

document.getElementById('footer-container').style.backgroundColor = 'green'    

