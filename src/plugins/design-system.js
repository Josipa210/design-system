import DsButton from 'src/components/DsButton.vue'
import DsCard from 'src/components/DsCard.vue'
import DsInput from 'src/components/DsInput.vue'
import DsBadge from 'src/components/DsBadge.vue'

export default {
    install(app) {
        app.component('DsButton', DsButton)
        app.component('DsCard', DsCard)
        app.component('DsInput', DsInput)
        app.component('DsBadge', DsBadge)
    }
}
