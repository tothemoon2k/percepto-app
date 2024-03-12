<script>
    // @ts-nocheck
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import ChecklistCard from "$lib/components/general/ChecklistCard.svelte";
    import NextBtn from "$lib/components/general/NextBtn.svelte";

    import AlexHormozi from "$lib/assets/AlexHormozi.webp";

    const presets = [
        {
            name: "Paul Graham",
            img: AlexHormozi,
            checklist: [
                "Growing Market",
                "Title",
                "Account Identification",
                "Password"
            ]
        },
        {
            name: "Alex Hormozi",
            img: AlexHormozi,
            checklist: [
                "Logo",
                "Title",
                "Account Identification",
                "Password"
            ]
        },
        {
            name: "Paul Graham",
            img: AlexHormozi,
            checklist: [
                "Logo",
                "Title",
                "Account Identification",
                "Password"
            ]
        },
        {
            name: "Paul Graham",
            img: AlexHormozi,
            checklist: [
                "Logo",
                "Title",
                "Account Identification",
                "Password"
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
                <div class="flex items-center gap-4 py-4 px-10">
                    <img class="h-12 rounded-full" src={checklists[currentlyEditing].img} alt="">
                    <h2 class="text-2xl font-medium">
                        <input bind:value={checklists[currentlyEditing].name} type="text">
                    </h2>
                </div>

                <hr>

                <div class="flex flex-col pt-10 pb-8 px-12 gap-10">
                    <ul class="flex flex-col gap-4 text-lg">
                        {#each checklists[currentlyEditing].checklist as item, index}
                            <li class="flex items-center gap-1.5"><img class="w-4 h-4 -mt-0.5" src="https://img.icons8.com/material/24/unchecked-checkbox--v2.png" alt="Blank Checkbox">
                                <input bind:value={item} type="text" name="test" id="test">
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

    <div class="px-10 md:px-12 lg:px-0 md:mt-28 lg:mt-32">
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