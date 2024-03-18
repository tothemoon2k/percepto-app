<script>
    let timeRemaining = 50; // Set the initial time to 90 seconds

    const countdownTimer = setInterval(() => {
        timeRemaining--;
        if (timeRemaining === 0) {
            clearInterval(countdownTimer); // Stop the timer when it reaches 0
        }
    }, 1000);
</script>

<div class="flex flex-col justify-center items-center w-full h-full absolute">
    <h1 class="text-3xl font-bold mt-5">Loading...</h1>
    <p class="text-lg mt-2">Evaluating your idea. Est: {timeRemaining} seconds remaining</p>
</div>