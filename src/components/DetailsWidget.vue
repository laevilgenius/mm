<template>

    <div class="details-widget card-modal">
        <div class="card">

            <div class="card-header">
                Media Details
                <button v-on:click="onClose" type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="details-widget-content card-body">
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td rowspan="4" style="text-align: center;">
                                <img v-if="file.thumb" v-bind:src="file.thumb" class="thumb">
                                <div v-else class="icon">
                                    <font-awesome-icon :icon="mmc.faIconClass(file)" fixed-width/>
                                </div>
                            </td>
                            <th>Name</th>
                            <td>{{ file.basename }}</td>
                        </tr>
                        <tr>
                            <th>Path</th>
                            <td>{{ file.path }}</td>
                        </tr>
                        <tr v-if="file.timestamp">
                            <th>Date</th>
                            <td>{{ file.timestamp }}</td>
                        </tr>
                        <tr v-if="file.size">
                            <th>Size</th>
                            <td>{{ file.size }}</td>
                        </tr>
                    </tbody>
                </table>
                <p class="buttons">
                    <button v-on:click.prevent="onClose" class="btn btn-secondary btn-sm" role="button"><font-awesome-icon icon="times"/> Close</button>
                    <template v-if="file.type!='dir'">
                        <a v-if="api.downloadUrl(file)" v-bind:href="api.downloadUrl(file)" class="btn btn-primary btn-sm" role="button"><font-awesome-icon icon="download"/> Download</a>
                        <button v-if="mmc.isSelected(file)" v-on:click.prevent="onUnselect"class="btn btn-primary btn-sm" role="button"><font-awesome-icon icon="times"/> Unselect</button>
                        <button v-else v-on:click.prevent="onSelect"class="btn btn-primary btn-sm" role="button"><font-awesome-icon icon="check"/> Select</button>
                    </template>
                </p>
            </div>

        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: [ 'file' ],
    computed: {
        ...mapState({
            options: state => state.options
        }),
        mmc() {
            return this.$parent;
        },
        api () {
            return this.mmc.api;
        }
    },
    methods: {
        onSelect() {
            this.mmc.selectFile(this.file);
            this.mmc.toggleDetailsOff();
        },
        onUnselect() {
            this.mmc.unselectFile(this.file);
            this.mmc.toggleDetailsOff();
        },
        onClose() {
            this.mmc.toggleDetailsOff();
        }
    }
};
</script>

<style lang="scss">
.details-widget-content {
    .thumb {
        max-height: 100px;
    }
    .icon {
        line-height: 100px;
        font-size: 50px;
    }
    .buttons {
        text-align: right;
    }
}
</style>
