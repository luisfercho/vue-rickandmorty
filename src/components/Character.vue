<template>
    <div
        class="column is-12-mobile is-4-desktop is-4-tablet"
    >
        <div class="card" >
            <div class="card-header">
                <img :src="character.image" alt="">
            </div>
            <div class="card-content">
                <h3 class="title is-size-4">
                    {{ character.name }}
                </h3>
                <button class="button is-success is-small is-rounded ">
                    Ver mas
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'character'
        ]
    }
</script>