<script>
    // @ts-nocheck
    export let percentage;
    export let size;
    export let fontSize;

    let color = "green";

    if (percentage < 50) {
        color = "red";
    }else if (percentage < 70) {
        color = "yellow";
    }else if (percentage < 90) {
        color = "green";
    }
</script>

<div class="flex items-center justify-center">
    <div class="relative" style:height="{size}" style:width="{size}">
        <svg class="transform -rotate-90 w-full h-full {color === "red" ? "bg-red-50" : color === "yellow" ? "bg-yellow-50" : color === "green" ? "bg-green-50" : "bg-blue-50"} rounded-full">
            <circle
                cx="50%"
                cy="50%"
                r="47%"
                stroke="{color === "red" ? "#EF4444" : color === "yellow" ? "#EAB308" : color === "green" ? "#22C55E" : "#3B82F6"}"
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
                stroke="{color === "red" ? "#EF4444" : color === "yellow" ? "#EAB308" : color === "green" ? "#22C55E" : "#3B82F6"}"
                stroke-width="3.5"
                fill="transparent"
                stroke-dasharray="754"
                stroke-dashoffset="565.5"
            />
        </svg>
        <span
            style="color: {color === "red" ? "#EF4444" : color === "yellow" ? "#EAB308" : color === "green" ? "#22C55E" : "#3B82F6"};"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 {fontSize} font-medium"
        >
            {percentage}
        </span>
    </div>
</div> 

<style>
    .circle{
        height: 3.5rem;
        width: 3.5rem;
    }
</style>