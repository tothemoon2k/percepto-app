<script>
    // @ts-nocheck
    export let percentage;
    export let positive;
    export let height;
    export let width;
</script>

<div class="flex items-center justify-center">
    <div class="relative h-{height} w-{width}">
        <svg class="transform -rotate-90 w-full h-full bg-green-50 rounded-full">
            <circle
                cx="50%"
                cy="50%"
                r="47%"
                stroke="#1ac553"
                stroke-width="3.5"
                fill="transparent"
                style="
                        stroke-dasharray: 301.59289474462014;
                        stroke-dashoffset: 0;
                    "
            />
            <circle
                cx="50%"
                cy="50%"
                r="47%"
                stroke="#1ac553"
                stroke-width="3.5"
                fill="transparent"
                stroke-dasharray="754"
                stroke-dashoffset="565.5"
            />
        </svg>
        <span
            style="color: #1ac553;"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-medium"
        >
            {percentage}
        </span>
    </div>
</div> 