<script>
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
</script>

<div class="flex flex-col justify-center items-center w-full fill-height absolute">
    <!-- Create/edit checklist modal
    <div class="bg-gray-300 flex justify-center items-center bg-opacity-50 absolute z-10 w-screen h-screen">
        <div class="flex flex-col bg-white w-2/5 rounded-2xl shadow-sm">
            <div class="flex items-center gap-4 py-4 px-10">
                <img class="h-12 rounded-full" src={AlexHormozi} alt="">
                <h2 class="text-2xl font-medium">Holden Gerlach Checklist</h2>
            </div>

            <hr>

            <div class="flex flex-col pt-10 pb-8 px-12 gap-10">
                <ul class="flex flex-col gap-4 text-lg">
                    {#each Array(4) as _}
                        <li class="flex items-center gap-1.5"><img class="w-4 h-4 -mt-0.5" src="https://img.icons8.com/material/24/unchecked-checkbox--v2.png" alt="Blank Checkbox">Account Managment</li>
                    {/each}
                    <button class="text-start font-medium underline cursor-pointer">Add Item</button>
                </ul>

                <div class="flex gap-4 self-end">
                    <button class="text-lg font-medium">Back</button>
                    <button class="text-lg text-white px-5 py-3 rounded-xl font-medium bg-black">Save</button>
                </div>
            </div>
        </div>
    </div>
    -->

    <div class="px-32 md:px-12 lg:px-0 md:mt-28 lg:mt-32">
        <h1 class="mt-10 md:mt-0 text-4xl md:text-5xl font-bold">
            Choose your checklists/criteria 📋
        </h1>
    
        <p class="mt-2 md:mt-1 text-lg md:text-xl text-gray-500">
            Objectively evaluate your business idea based on winning checklists
        </p>
    </div>

    <div class="mt-12 md:mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each presets as {name, img, checklist}}
            <ChecklistCard {name} {img} {checklist}/>
        {/each}
    </div>

    <button class="mt-6 md:ml-6 md:w-5/6 text-start font-medium underline text-lg cursor-pointer">Create a custom checklist</button>

    <div class="mb-14 mt-10 md:mt-6 md:mr-40 md:self-end flex items-center gap-8">
        <button class="w-fit h-fit text-black text-xl font-medium hover:scale-95 transition-all cursor-pointer">Back</button>
        <NextBtn text="Evaluate"/>
    </div>
</div>