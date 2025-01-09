class PomodoroTimer {
    constructor() {
        this.timeLeft = 25 * 60; // 25 minutes in seconds
        this.timerId = null;
        this.isRunning = false;
        
        // Timer durations in minutes
        this.durations = {
            pomodoro: 25,
            shortBreak: 5,
            longBreak: 15
        };

        this.initializeElements();
        this.initializeEventListeners();
        this.updateDisplay();

        // Initialize sound effects
        this.sounds = soundEffects;
    }

    initializeElements() {
        this.minutesDisplay = document.getElementById('minutes');
        this.secondsDisplay = document.getElementById('seconds');
        this.startPauseButton = document.getElementById('startPause');
        this.resetButton = document.getElementById('reset');
        this.pomodoroButton = document.getElementById('pomodoro');
        this.shortBreakButton = document.getElementById('shortBreak');
        this.longBreakButton = document.getElementById('longBreak');
    }

    initializeEventListeners() {
        this.startPauseButton.addEventListener('click', () => this.toggleStartPause());
        this.resetButton.addEventListener('click', () => this.reset());
        this.pomodoroButton.addEventListener('click', () => this.setTimer('pomodoro'));
        this.shortBreakButton.addEventListener('click', () => this.setTimer('shortBreak'));
        this.longBreakButton.addEventListener('click', () => this.setTimer('longBreak'));
    }

    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update the display elements
        this.minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        this.secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        
        // Update the browser tab title
        document.title = `${timeString} - Pomodoro Timer`;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timerId = setInterval(() => {
                this.timeLeft--;
                this.updateDisplay();
                
                if (this.timeLeft === 0) {
                    this.playAlarm();
                    this.pause();
                }
            }, 1000);
        }
    }

    pause() {
        this.isRunning = false;
        clearInterval(this.timerId);
    }

    reset() {
        this.sounds.play('click');
        this.pause();
        this.timeLeft = this.durations.pomodoro * 60;
        this.updateDisplay();
        this.startPauseButton.textContent = 'Start';
        this.startPauseButton.classList.remove('pause');
        this.startPauseButton.classList.add('start');
    }

    setTimer(mode) {
        this.sounds.play('click');
        this.pause();
        this.timeLeft = this.durations[mode] * 60;
        this.updateDisplay();
        
        // Update active button
        [this.pomodoroButton, this.shortBreakButton, this.longBreakButton].forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(mode).classList.add('active');
    }

    playAlarm() {
        this.sounds.play('complete');
    }

    toggleStartPause() {
        this.sounds.play('click');
        if (this.isRunning) {
            this.pause();
            this.startPauseButton.textContent = 'Start';
            this.startPauseButton.classList.remove('pause');
            this.startPauseButton.classList.add('start');
        } else {
            this.start();
            this.startPauseButton.textContent = 'Pause';
            this.startPauseButton.classList.remove('start');
            this.startPauseButton.classList.add('pause');
        }
    }
}

// Initialize the timer when the page loads
const timer = new PomodoroTimer(); 