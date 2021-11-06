<template>
    <nav class="main-navbar my-8 mr-8">
        <div class="flex items-center card p-4">
            <div>
                <!-- <img src="resolv" alt="" /> -->
            </div>
            <div class="w-64" />

            <div class="ml-auto flex items-center">
                <div
                    class="
                        square
                        rounded-3xl
                        bg-orange-lighten
                        w-12
                        h-12
                        mr-2
                        flex
                        items-center
                        justify-center
                        text-org
                    "
                >
                    <BellIcon class="stroke-current text-orange w-8 h-8" />
                </div>
                <div
                    class="
                        square
                        rounded-3xl
                        bg-org-100
                        w-12
                        h-12
                        mr-2
                        flex
                        items-center
                        justify-center
                        text-orange
                    "
                >
                    <BasketIcon class="stroke-current text-orange w-8 h-8" />
                </div>

                <div
                    class="
                        bg-blue-500
                        rounded-l-2xl
                        pl-3
                        rounded-r-full
                        flex
                        items-center
                        text-white
                    "
                >
                    <span> Hello Patryk! </span>
                    <img
                        class="
                            w-10
                            h-10
                            ml-3
                            border-white border-2
                            rounded-full
                        "
                        src="https://scontent-ber1-1.xx.fbcdn.net/v/t1.6435-9/c0.169.1536.1536a/s526x395/195530230_3824196204355429_1415664284968448299_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=uUXYYQEF4WcAX_inumL&_nc_ht=scontent-ber1-1.xx&oh=141d66a03fff8cc988bff02669ac37ea&oe=61972518"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import BellIcon from '@ICON/bell.svg?component'
import BasketIcon from '@ICON/transport.svg?component'

export default {
    components: { BellIcon, BasketIcon },
    setup() {}
}
</script>

<style>
.main-navbar {
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100vw - theme('width.64') - 4rem);
}
</style>
