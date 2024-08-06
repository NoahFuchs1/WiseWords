const philosopherData = {
    Philosopher1: {
        name: 'Marcus Aurelius',
        audios: [
            { file: 'Audios/marcus-aurelius1.mp3', text: 'Reflect in silence for 10 minutes on a challenge. Write your thoughts, seek a solution, and find inner strength.' },
            { file: 'Audios/marcus-aurelius2.mp3', text: 'Spend 10 minutes in silence reflecting on a disappointment. Write your thoughts and feelings, seek forgiveness and inner peace, and find your inner strength.' },
            { file: 'Audios/marcus-aurelius3.mp3', text: 'Take time today to reflect on a difficult decision. Write down competing priorities, balance them, and develop a reasoned, compassionate strategy.' }
        ]
    },
    Philosopher2: {
        name: 'Platon',
        audios: [
            { file: 'Audios/platon1.mp3', text: 'Take time to think about a difficult decision. Write down aspects and consequences, and strive for a just and wise resolution.' },
            { file: 'Audios/platon2.mp3', text: 'Choose a personal belief and discuss it with someone who has a different perspective. Listen carefully and consider their arguments, then document any new insights.' },
            { file: 'Audios/platon3.mp3', text: 'Advocate for an idea on a current issue. Develop a strong, balanced argument, present it, and reflect on the reception.' }
        ]
    },
    Philosopher3: {
        name: 'Aristoteles',
        audios: [
            { file: 'Audios/aristoteles1.mp3', text: 'Choose a decision balancing fairness with consequences. Write down how to reconcile these aspects and mitigate the impact.' },
            { file: 'Audios/aristoteles2.mp3', text: 'Reflect on a recent failure. Write down steps to emerge stronger from it.' },
            { file: 'Audios/aristoteles3.mp3', text: 'Reflect on balancing long-term goals with immediate needs. Note how you managed or will manage this balance.' }
        ]
    }
};

function selectPhilosopher(philosopher) {
    localStorage.setItem('selectedPhilosopher', philosopher);
    window.location.href = 'philosopher.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const philosopher = localStorage.getItem('selectedPhilosopher');

    if (philosopher && philosopherData[philosopher]) {
        const philosopherName = document.getElementById('philosopher-name');
        const audioList = document.getElementById('audio-list');

        philosopherName.textContent = philosopherData[philosopher].name;
        philosopherData[philosopher].audios.forEach((audio, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'audio-list-item';

            const button = document.createElement('button');
            button.textContent = `Day ${index + 1}`;
            button.onclick = () => playAudio(audio.file, audio.text);

            listItem.appendChild(button);
            audioList.appendChild(listItem);
        });
    }
});

function playAudio(file, text) {
    const audioPlayer = document.getElementById('audio-player');
    const fazit = document.getElementById('fazit');

    audioPlayer.src = file;
    audioPlayer.classList.remove('hidden');
    audioPlayer.play();

    audioPlayer.onended = () => {
        fazit.textContent = text;
        fazit.classList.remove('hidden');
    };
}

function goBack() {
    window.location.href = 'index.html';
}
