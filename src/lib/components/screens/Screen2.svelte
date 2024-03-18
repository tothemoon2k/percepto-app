<script>
    // @ts-nocheck
    import { createEventDispatcher } from 'svelte';
    import ChecklistCard from "$lib/components/general/ChecklistCard.svelte";
    import NextBtn from "$lib/components/general/NextBtn.svelte";

    import AlexHormozi from "$lib/assets/AlexHormozi.webp";
    let PaulGraham = "https://techcrunch.com/wp-content/uploads/2011/06/paulgraham.png";
    let Biaheza = "data:image/jpeg;base64,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";
    let RickRoss = "https://thejasminebrand.com/wp-content/uploads/2021/06/Rick-Ross-thejasminebrand.png";
    const dispatch = createEventDispatcher();

    const presets = [
        {
            name: "Alex Hormozi Checklist",
            img: AlexHormozi,
            checklist: [
                "Target customers can afford your offering.",
                "Easy to reach and target your ideal audience",
                "Business is in a growing market",
            ]
        },
        {
            name: "Paul Graham Start-up Checklist",
            img: PaulGraham,
            checklist: [
                "Is the idea in a market that is currently big or small but rapidly growing?",
                "Does the idea solve a painful problem?",
                "Is the idea is difficult to replicate?",
            ]
        },
        {
            name: "Biaheza Winning Product Checklist",
            img: Biaheza,
            checklist: [
                "Does the product solve a problem?",
                "High profit margin",
                "Mass market appeal",
                "Product not sold in most retail stores",
                "Product is undiscovered"
            ]
        },
        {
            name: "Rick Ross Business Checklist",
            img: RickRoss,
            checklist: [
                "Is there hustle involved?",
                "Can it grow long into the future?",
                "Is it cash flow positive?",
                "Is there potential for a big exit?"
            ]
        }
    ]

    let checklists = [...presets];

    let showingModal = false;
    let showingEditModal = false;
    let currentlyEditing = 0;
    let selectedChecklists = [];

    const handleCreate = () =>{
        showingModal = true;
    }

    const closeCreate = () =>{
        showingModal = false;
        newChecklist = {
            name: "Custom Checklist 1",
            img: "https://img.icons8.com/ios-glyphs/200/settings--v1.png",
            checklist: ["Item 1"]
        }
    }

    let newChecklist = {
        name: "Custom Checklist 1",
        img: "https://img.icons8.com/ios-glyphs/200/settings--v1.png",
        checklist: ["Criteria 1"]
    }

    const handleAddNewChecklistItem = () =>{
        newChecklist.checklist.push("New Criteria");
        newChecklist = newChecklist;
    }

    const createNewChecklist = () =>{
        checklists.push(newChecklist);
        newChecklist = {
            name: "Custom Checklist 1",
            img: "https://img.icons8.com/ios-glyphs/200/settings--v1.png",
            checklist: ["Criteria 1"]
        }
        checklists = checklists;
        showingModal = false;
    }

    const handleChecklistEdit = (e) =>{
        currentlyEditing = e.detail;
        showingEditModal = true;
    }

    const handleAddNewChecklistItemEdit = () =>{
        checklists[currentlyEditing].checklist.push("New Criteria");
        checklists = checklists;
    }

    const closeEdit = () => {
        showingEditModal = false;
    }

    const saveEdit = () => {
        checklists = checklists;
        showingEditModal = false;
    }

    const handleChecklistClick = (e) =>{
        if(e.detail.selected){
            selectedChecklists.push(e.detail.index);
        }else{
            selectedChecklists = selectedChecklists.filter((item) => item !== e.detail.index);
        }
    }

    const handleBack = () => {
        dispatch('back');
    }

    const evaluate = () =>{
        dispatch('selectedChecklists', selectedChecklists.map((item) => checklists[item]));
        dispatch('eval');
    }
</script>

<div class="flex flex-col justify-center items-center w-full fill-height absolute">
    {#if showingModal}
        <div class="bg-gray-300 flex justify-center items-center bg-opacity-50 absolute z-10 w-screen h-screen">
            <div class="flex flex-col bg-white w-2/5 rounded-2xl shadow-sm">
                <div class="flex items-center gap-4 py-4 px-10">
                    <img class="h-12 rounded-full" src={newChecklist.img} alt="">
                    <h2 class="text-2xl font-medium">
                        <input bind:value={newChecklist.name} type="text">
                    </h2>
                </div>

                <hr>

                <div class="flex flex-col pt-10 pb-8 px-12 gap-10">
                    <ul class="flex flex-col gap-4 text-lg">
                        {#each newChecklist.checklist as item, index}
                            <li class="flex items-center gap-1.5"><img class="w-4 h-4 -mt-0.5" src="https://img.icons8.com/material/24/unchecked-checkbox--v2.png" alt="Blank Checkbox">
                                <input bind:value={item} type="text" name="test" id="test">
                            </li>
                        {/each}
                        <button on:click={handleAddNewChecklistItem} class="text-start font-medium underline cursor-pointer">Add Item</button>
                    </ul>

                    <div class="flex gap-4 self-end">
                        <button on:click={closeCreate} class="text-lg font-medium">Back</button>
                        <button on:click={createNewChecklist} class="text-lg text-white px-5 py-3 rounded-xl font-medium bg-black">Create<!--If creating new checklist - Create, if editing checklist - Save--> </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}

    {#if showingEditModal}
        <div class="bg-gray-300 flex justify-center items-center bg-opacity-50 absolute z-10 w-screen h-screen">
            <div class="flex flex-col bg-white w-2/5 rounded-2xl shadow-sm">
                <div class="flex items-center gap-4 py-4 w-full">
                    <img class="h-12 rounded-full" src={checklists[currentlyEditing].img} alt="">
                    <h2 class="text-2xl font-medium w-full">
                        <input class="test w-full" bind:value={checklists[currentlyEditing].name} type="text">
                    </h2>
                </div>

                <hr>

                <div class="flex flex-col pt-10 pb-8 px-12 gap-10">
                    <ul class="flex flex-col gap-4 text-lg">
                        {#each checklists[currentlyEditing].checklist as item, index}
                            <li class="flex items-center gap-1.5"><img class="w-4 h-4 -mt-0.5" src="https://img.icons8.com/material/24/unchecked-checkbox--v2.png" alt="Blank Checkbox">
                                <input class="w-fit px-1" bind:value={item} type="text" name="test" id="test">
                            </li>
                        {/each}
                        <button on:click={handleAddNewChecklistItemEdit} class="text-start font-medium underline cursor-pointer">Add Item</button>
                    </ul>

                    <div class="flex gap-4 self-end">
                        <button on:click={closeEdit} class="text-lg font-medium">Back</button>
                        <button on:click={saveEdit} class="text-lg text-white px-5 py-3 rounded-xl font-medium bg-black">Save<!--If creating new checklist - Create, if editing checklist - Save--> </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}

    <div class="px-10 md:px-12 lg:px-0 md:mt-14 lg:mt-32">
        <h1 class="mt-10 md:mt-0 text-4xl md:text-5xl font-bold">
            Choose your checklists/criteria 📋
        </h1>
    
        <p class="mt-2 md:mt-1 text-lg md:text-xl text-gray-500">
            Objectively evaluate your business idea based on winning checklists
        </p>
    </div>

    <div class="mt-12 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each checklists as {name, img, checklist}, index}
            <ChecklistCard on:click={handleChecklistClick} on:edit={handleChecklistEdit} {name} {img} {checklist} {index}/>
        {/each}
    </div>

    <button on:click={handleCreate} class="mt-6 md:ml-6 md:w-5/6 text-start font-medium underline text-lg cursor-pointer">Create a custom checklist</button>

    <div class="mb-14 mt-10 md:mt-6 md:mr-40 md:self-end flex items-center gap-8">
        <button on:click={handleBack} class="w-fit h-fit text-black text-xl font-medium hover:scale-95 transition-all cursor-pointer">Back</button>
        <NextBtn on:click={evaluate} text="Evaluate"/>
    </div>
</div>

<style>
    @media (max-width: 1020px) {
        .fill-height{
            flex: 1;
            display: flex;
            justify-content: center;
        }
    }
    @media (min-width: 1024px) {
        .fill-height{
            height: 100%;
        }
    }

    .test{
        padding-left: 20px;
        padding-right: 20px;
    }
</style>