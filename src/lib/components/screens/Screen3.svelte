<script>
    // @ts-nocheck
    export let idea;
    export let selectedChecklists;
    export let checklistNames;
    export let results = [];

    import axios from "axios";
    import ChecklistResults from "$lib/components/general/ChecklistResults.svelte";
    import Percentage from "$lib/components/general/Percentage.svelte";

    let showingModal = true;
    let emailSending = false;
    let emailName = "";
    let email = "";
    let emailSent = true;

    const toggleModal = () => {
        showingModal = !showingModal;
        emailSent = false;
    }

    const sendEmail = () => {
        emailSending = true;
        axios.post(import.meta.env.VITE_MAIL_POST_URL || "https://businessideaevaluator.onrender.com/sendmail", {
            email: email,
            name: emailName,
            results: results
        })
        .then(res => {
            console.log(res);
            emailSending = false;
            emailSent = true;
        })
        .catch(error => {
            console.error('Error:', error);
            emailSending = false;
        });
    }

    function calculatePassedPercentage() {
        let totalItems = results.checklists.length;
        let passedItems = 0;
        let totalSum = 0;

        for (const checklist of results.checklists) {
            let sum = 0;
            for (const item of checklist.items) {
                sum+=item.passing_percentage;
            }
            totalSum += sum/checklist.items.length;
        }

        return Math.floor(totalSum/totalItems);
    }
</script>

<div class="flex flex-col justify-center items-center w-full fill-height absolute">

    {#if showingModal}
        <div class="bg-gray-300 flex justify-center items-center bg-opacity-50 z-10 w-screen h-screen">
            <div class="flex flex-col bg-white w-[90%] md:w-3/5 lg:w-2/5 rounded-2xl shadow-sm">
                {#if !emailSent}
                    <div class="flex items-center gap-4 py-4 px-10 w-full">
                        <h2 class="text-2xl font-medium w-full">Save Your Results</h2>
                    </div>

                    <hr>

                    <div class="flex flex-col pt-8 pb-8 px-12 gap-10">

                        <div class="flex flex-col gap-8">
                            <div>
                                <label for="name">Name</label>
                                <input bind:value={emailName} type="text" id="name" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Holdezy Gerlachimo">
                            </div>

                            <div>
                                <label for="email">Enter Your Email</label>
                                <p class="text-sm text-gray-500 mt-0.5 mb-3">We'll send a copy of your results to email below</p>
                                <input bind:value={email} type="email" id="email" class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="holdezy@gmail.com">
                            </div>
                        </div>

                        <div class="flex gap-4 self-end">
                            <button on:click={toggleModal} class="text-lg font-medium">Back</button>
                            <button on:click={sendEmail} class="text-lg text-white px-5 py-3 rounded-xl font-medium bg-black">
                                {#if !emailSending}
                                    Send 
                                {:else}
                                    <div role="status">
                                        <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                {/if}
                            </button>
                        </div>
                    </div>
                {:else}
                    <div class="relative py-10 gap-10 flex flex-col justify-center items-center">
                        <video preload="auto" class="h-80 rounded-lg" autoplay>
                            <source src="https://cdn.dribbble.com/users/2247428/screenshots/16321135/media/222d28f7bbdccd37951fcb0a4a042100.mp4" type="video/mp4">
                            <track src="/path/to/description.txt" kind="captions" srclang="en" label="English Description">
                            Your browser does not support the video tag.
                        </video>
                        <div class="flex flex-col gap-8">
                            <h1 class="text-2xl text-center font-medium px-20">Your results have been sent to your email 🎉</h1>
                            <button on:click={toggleModal} class="w-4/6 mx-auto text-lg text-white px-5 py-3 rounded-xl font-medium bg-black">Back</button>
                        </div>
                    </div>
                {/if}
            </div>
        </div>
    {/if}

    {#if !showingModal}
        <div class="mb-9 w-5/6">  <!--mt-10 md:mt-20 lg:mt-14-->
            <div class="mb-3 flex items-center gap-6">
                <h1 class="text-4xl md:text-5xl font-bold">
                    Results
                </h1>

                <Percentage percentage={calculatePassedPercentage()} size="3.5rem" fontSize="text-xl"/>
            </div>

            <p class="text-lg md:text-xl text-gray-500">
                {idea}
            </p>
        </div>

        <div class="flex flex-col gap-6 w-5/6">

            {#each results.checklists as checklist, i}
                <ChecklistResults 
                    items={checklist.items}
                    name={checklistNames[i]}
                    passPercentage={checklist.passing_percentage}
                />
            {/each}

            <button on:click={toggleModal} class="mr-4 text-end font-medium underline text-lg cursor-pointer">Save your results</button>
        </div>
    {/if}
    
</div>

<style>
    @media (max-width: 768px) {
        .fill-height{
            flex: 1;
            display: flex;
            justify-content: center;
        }
    }
    @media (min-width: 769px) {
        .fill-height{
            height: 100%;
        }
    }
</style>