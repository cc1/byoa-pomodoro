class SoundEffects {
    constructor() {
        // Using base64 encoded audio for better compatibility and no external files needed
        this.sounds = {
            click: 'data:audio/wav;base64,UklGRnQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU8GAACBhYqFbF1NODAzR1ppi5yciXhsYlxZWFVVT0Q3KRcYIjEzPUlecYydn6Cdj4V3aV1QS0pNUFJYYnB4gYmKiIJ5b19NPjQvMTc+SVtriJOWmJiVjoJ1Z1lOSElMT1JYYm96goiJiYJ4bV1OPjUxMzk/R1hkf4qVl5eRhndoW09MTk9PUFNY'+
            'Y296goqLioR7cWBPPzYzNTs+RVVhfIiXm5uYkYZ6bF9TVVVTUVFWXGVxfISMjoyGfXNjUkE3NDY7PkNTX3qHlpycmpOIf3BiWFheXltbXmNrdn6FjI2LhX1yY1JCOjY3PD9DVF96h5acnJqUiYB0Zl5gYmNiYWNobHV8g4qLioR6b19PPzk4Oz0/QlJdeYaWnJydl42De2piYmRmZmZpbXB1fYSKioiBeGxcTD85OTs9P0FSXXmHlp2dnpmQhX1s'+
            'ZGNkZmZnaGxvdHyDiYmHgHdrW0s/Ojs8Pj9BUl15h5adnp6akYZ+bWRjZGVlZmhrbXJ6gYeIh4B3a1tLP0A/Pj4/QVJdeYeWnZ6em5KHf25lY2RkZWZna2xweH+FhoWCem5eUEVFQ0A/QERTXnmHlZ2enpuSiH9vZmNjZGRlZ2prcnl/hIWEgXltXVBGRkRBQEBEU155h5WdnZ6bk4h/cGdjY2RkZWdqbHJ5f4SEg4B4bF1QR0dFQkFBRVRe'+
            'eYeVnZ2em5OIf3BnY2NjZGVna2xzeH+Dg4J/d2tcUEhIRkNDQ0VUXnmHlZ2dnpuTiH9wZ2NjY2RlZ2tscnh+goKBfnZqW1FJSUdERERGVV95h5WcnZ2akoZ+b2ZiYmNjZGZpbHF3fYGBgH11aVpRSklIRUVFR1VfeYeVnJ2dmpKGfm9mYmJiY2RmaWtwdnx/gH98dGhZUEpKSEZGRkhWX3mHlZydnZqShn5vZmJiYmJjZWdqb3V6fn9+fHNn'+
            'WFBLSklHR0dIVl95h5WcnJyZkYV9bmViYWFiY2RmaW5zeHz+fn1yaFpSTExKSEhIS1hfeYaUm5ycmZGFfW5lYWBgYWJjZWhscHd7fX18c2lcU05OS0pKS01ZYHmGlJubm5iQhHxtZGBfX19gYWRnaW5zd3t9fXRrX1VSUk9OTU5QW2F5hpSam5uYkIR8bWRgX19fYGFkZ2ltcXV5e3x2bWJcV1ZUU1RUV15jeYWTmpqal4+De2xjX15e'+
            'XmBgYmVobHBzdnp7d25kX1tcW1tbXGBjZnmFk5qampeOgnprYl5dXV1eX2FjZmpucXR4enl0amRhYWBgYWNmaGx5hZOZmZmWjYF5amFeXVxcXV5gYmVpbG9ydnh5d29oZmVlZWZpbG9zeYWSmZmYlo2BeWphXlxcXF1eYGJlaWxvcnZ4eXhybGhoaGlrbXF1eYKRmJiXlYyAeGlgXVtbW1xdX2FkZ2pucHN2eHp5c29tbW5wc3d7f4SR'+
            'l5eWlIl+d2hfXFpaWltcXmBjZmlrbnF0dnh5eHVzc3V3e3+DhpGWlpWTiX53Z19cWlpaW1xeYGNmaWtucXR2d3h5eXl6fICEiI2UlZSTiH12Zl5bWVlZWltdX2JlaGpucHN1dnd4eXp8f4OHi5CTk5KQhntxY1tYWFhYWVpdYGNmaWtucHJ0dXZ3eHp9gYWJjZGSkY+HeW5hWldXV1dYWVxfYmVnaWxucHJzdHV2eHt/g4eKjo+PjoV4'+
            'bGBZV1ZWVldZW15hZGdpa21vcXJzdHZ5fICEh4uNjY2LgnVpXldVVVVVVlhbXmFkZ2lrbW9xcnN1d3p9gYWIi4yMioF0aF5XVVVVVVZYW15hZGdpa21vcXJzdXd6fYCEh4qLi4qAc2deV1VVVVVWWFteYWRnaWttb3FydHV3en2AhIeKi4uKgHNoXldVVVVVVlhbXmFkZ2lrbW9xcnR2eHt+gYWIiouLioF0aV9YVlZWVldZXF9i',
            beep: 'data:audio/wav;base64,UklGRkQFAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YSAFAACBh4qGbF1NODAzR1ppi5ycin1tYFZRUFRbZnJ8hYmIhX5ya19QQjcyMzpFUmByi5aYl5KKf3FlVk5NUVhha3Z/hYiHhHxxZVhKPTMxNT9LWm2FkpmZlY2EeGldUU9SVVpkcHqChIeGg3tvYVRFOzIzOUNPX3GKlpmYlI2E'+
            'eWpeU1FSV19qdX6DhoaFgXluYFNDOjI0O0ZTY3SKlpmYlIyDd2hdUlJVW2Ftd4CEhoWEgHhtX1JCOjM2PklWZXaLlpmYk4uCdmddU1NWXGJueICEhoWEf3dsXlFBOjM3P0tYZ3iMl5mYk4qBdWVcU1RXXWNveYGEhoWEfnZrXVBBOzQ4QU1ZaHmMl5mXkoqAdWVcVFVYXmRweYGEhoWDfnVqXE9AOzQ5Qk5aanqMl5mXkoqAdGRb'+
            'VFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVY'+
            'XmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRw'+
            'eYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGE'+
            'hoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWDfXRpW04/OzQ6Q09ba3uMl5mXkoqAc2RbVFVYXmRweYGEhoWD',
            complete: 'data:audio/wav;base64,UklGRpQHAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YXAHAACAgICAgICAgICAgICAgICAgICAgICAgICAf3hxeH2DgXNcVmVweGxgY2VwfYuIhHJpZmBea3N0b3BtcG1tcXR3goeIhH53cW1tc3h9gIGCgX93c2xpY2JoaXN0f4yDfHVoWllYYW13f4iKioJ3aF9ZU1BYX2t0f4yT'+
            'mZOKf3NkWlNWV1xha3R8hI2RkYqAb2BXU1BTWGBqeYqXn6Ccj31nWE1JR0pTX2x8jJunqaOVhGhXTEVDSFFgeI2frK+rnoxvW0xDQD9HWnGHm6yxsKeYiGxZSkA/Q1Nrg5enr7Gql4dvXE1CQENRaICUpKyurKWQgWdRRUFEVG2FmKisraykkHtlUkdFSFhyiZyorayqooZ1YE5GRk1hfI+gq62tqZ6GdGFQSEpWaICUpa2uraqh'+
            'jHZjUklMWXB+k6Wtra2qnohxXlBKUF9zipeqra2tq6WNfGdVTlNheIyerK2tra2nk4BrWlJWZHqQoKysrKyspJB8aVhUWmh9kqKsrKysrKaRfmxbVlxrf5SjrKysrKynkoBtXVZdbn+To6usrKysp5KAbl5XX3B/k6OrrKysrKeRf21dVl5vfpKiqqqqqqqlkH5sXFVdb36Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqWQfWtbVV1u'+
            'fpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQ'+
            'fWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKq'+
            'qqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tV'+
            'XW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqqqqqpo5B9a1tVXW5+kaKqqqqqqqSQfWtbVV1ufpGiqqqqqqqkkH1rW1Vdbn6Roqqq'
        };

        this.audioElements = {};
        
        // Pre-load all sounds
        for (const [key, base64] of Object.entries(this.sounds)) {
            const audio = new Audio(base64);
            this.audioElements[key] = audio;
        }
    }

    play(soundName) {
        const audio = this.audioElements[soundName];
        if (audio) {
            audio.currentTime = 0; // Reset the audio to start
            audio.play();
        }
    }
}

// Create a global instance
const soundEffects = new SoundEffects();