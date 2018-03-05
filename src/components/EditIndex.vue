<template>
    <div class="admin">
        <Navbar :isHideMenu="true" />
        <spinner v-if="loader"/>
        <section class="wrapper" v-if="!loader">
            <div class="b-grid__list">
                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">

                        <div class="heading">
                            <div></div>
                            <h1 class="title">Change index page</h1>
                            <div v-if="lang === 'ru'" class="lang" @click="changeLang('en')">RU</div>
                            <div v-if="lang === 'en'" class="lang" @click="changeLang('ru')">EN</div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Greeting</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <textarea v-model="content.greeting.title"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">What is AleHub</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <textarea v-model="content.description.title"></textarea>
                            </div>

                            <div class="input-block">
                                <label>Subtitle</label>
                                <textarea v-model="content.description.subtitle"></textarea>
                            </div>

                            <div class="input-block">
                                <label>Text</label>
                                <textarea v-model="content.description.text"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Guaranteed</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <textarea v-model="content.guaranteed.title"></textarea>
                            </div>

                            <div class="input-block">
                                <label>Subtitle</label>
                                <textarea v-model="content.guaranteed.subTitle"></textarea>
                            </div>

                            <div class="input-block">
                                <label>Guaranteeds:</label>
                                <div class="b-grid__list">
                                    <div v-for="item in content.guaranteed.list" class="b-grid__item b-grid__item--1-3">
                                        <div class="input-block">
                                            <input v-model="item.title">
                                            <textarea v-model="item.text"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Documents</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <textarea v-model="content.docs.title"></textarea>
                            </div>

                            <div class="input-block">
                                <label>Subtitle</label>
                                <textarea v-model="content.docs.subtitle"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Concept</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <textarea v-model="content.concept.title"></textarea>
                            </div>

                            <div class="input-block">
                                <label>List:</label>
                                <div class="b-grid__list">
                                    <div v-for="item in content.concept.list" class="b-grid__item b-grid__item--1-2">
                                        <div class="input-block">
                                            <input v-model="item.title">
                                            <textarea v-model="item.text"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Team</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Leed Dev Title</label>
                                <input v-model="content.team.partners.title">
                            </div>

                            <div class="input-block">
                                <label>Title</label>
                                <input v-model="content.team.participants.title">
                            </div>

                            <div class="input-block">
                                <label>Members:</label>
                                <div class="team-list">
                                    <div v-for="(item, indexMember) in content.team.participants.members" :key="indexMember" class="item">
                                        <div class="input-block">
                                            <img :src="getUserPhoto(item.image)" :alt="item.name" :title="item.name" width="300" height="300" style="border-radius: 100%;">
                                            <img src="../../static/icons/edit.png" alt="Edit" title="Edit" width="20" height="20" class="edit" @click="openEditModal(indexMember)" v-if="false">
                                            <img src="../../static/icons/delete.png" alt="Delete" title="Delete" width="20" height="20" class="delete" @click="deleteMember(indexMember)" v-if="false">
                                            <input v-model="item.name">
                                            <textarea v-model="item.position"></textarea>
                                        </div>
                                    </div>

                                    <div class="item" v-if="false">
                                        <div class="input-block">
                                            <img src="../../static/icons/add.png" width="320" height="320" title="Add new member" style="border-radius: 100%;margin-bottom: 30px;" @click="$modal.show('addNewMember')">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Partners</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <input v-model="content.partners.title">
                                <label>Subtitle</label>
                                <input v-model="content.partners.subtitle">
                            </div>

                            <div class="input-block">
                                <label>Partners:</label>
                                <div class="team-list">
                                    <div v-for="(item, indexPartner) in content.partners.list" :key="indexPartner" class="item">
                                        <div class="input-block">
                                            <img :src="$host + '/ale-files/'+item.logo" :alt="item.name" :title="item.name" width="300" height="300">
                                            <img src="../../static/icons/edit.png" alt="Edit" title="Edit" width="20" height="20" class="edit" @click="openEditPartnerModal(indexPartner)" v-if="false">
                                            <img src="../../static/icons/delete.png" alt="Delete" title="Delete" width="20" height="20" class="delete" @click="deletePartner(indexPartner)" v-if="false">
                                            <input v-model="item.name" placeholder="Name">
                                            <textarea v-model="item.link" placeholder="Link"></textarea>
                                        </div>
                                    </div>

                                    <div class="item" v-if="false">
                                        <div class="input-block">
                                            <img src="../../static/icons/add.png" width="320" height="320" title="Add new partner" style="border-radius: 100%;margin-bottom: 30px;" @click="$modal.show('addNewPartner')">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="indexPage">
                    <span class="component-name">Subscribe form</span>
                </div>

                <div class="b-grid__item b-grid__item--1-1">
                    <div class="content">
                        <div class="edit-form">
                            <div class="input-block">
                                <label>Title</label>
                                <input v-model="content.subscribe.title">
                            </div>

                            <div class="input-block">
                                <label>Subtitle</label>
                                <input v-model="content.subscribe.subtitle">
                            </div>

                            <div class="input-block">
                                <label>Placeholder</label>
                                <input v-model="content.subscribe.placeholder">
                            </div>

                            <div class="input-block">
                                <label>Button</label>
                                <input v-model="content.subscribe.btnText">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="b-grid__item b-grid__item--1-1 save-outer">
                    <div class="content save-block">
                        <button @click="saveIndexPage">Save</button>
                    </div>
                </div>

            </div>
        </section>
        <modal name="addNewMember" @opened="uploadImageHandler" @closed="removeStateNewMember" :draggable="true">
            <div class="b-grid__item b-grid__item--1-1">
                <div class="content">
                    <div class="edit-form">
                        <div class="input-block">
                            <label>New member</label>
                            <div class="b-grid__list">
                                <div class="b-grid__item b-grid__item--1-1">
                                    <div class="input-block">
                                        <img src="" alt="" id="imagePreview" style="display:none;">
                                        <input type="file" name="picture" class="photo" id="imgInput" />
                                        <input placeholder="Username" v-model="newMemberName" @input="removeErrorText">
                                        <textarea placeholder="Position" v-model="newMemberPosition" @input="removeErrorText"></textarea>
                                        <div class="content save-block">
                                            <button @click="addNewMember">Add member</button>
                                        </div>
                                        <span class="errorText" v-if="errorText">{{ errorText }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        <modal name="addNewPartner" @opened="uploadImagePartnerHandler" @closed="removeStateNewPartner" :draggable="true">
            <div class="b-grid__item b-grid__item--1-1">
                <div class="content">
                    <div class="edit-form">
                        <div class="input-block">
                            <label>New partner</label>
                            <div class="b-grid__list">
                                <div class="b-grid__item b-grid__item--1-1">
                                    <div class="input-block">
                                        <img src="" alt="" id="imagePartnerPreview" style="display:none;">
                                        <input type="file" name="picture" class="photo" id="imgPartnerInput" />
                                        <input placeholder="Name" v-model="newPartnerName" @input="removeErrorText">
                                        <input placeholder="Link" v-model="newPartnerLink" @input="removeErrorText">
                                        <div class="content save-block">
                                            <button @click="addNewPartner">Add partner</button>
                                        </div>
                                        <span class="errorText" v-if="errorText">{{ errorText }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        <modal name="editMemberImage" @before-open="uploadEditImageHandler" @closed="removeStateNewMember" :draggable="true">
            <div class="b-grid__item b-grid__item--1-1">
                <div class="content">
                    <div class="edit-form">
                        <div class="input-block">
                            <label>Edit image</label>
                            <div class="b-grid__list">
                                <div class="b-grid__item b-grid__item--1-1">
                                    <div class="input-block">
                                        <img src="" alt="" id="editImagePreview">
                                        <input type="file" name="picture" class="photo" id="editImgInput" />
                                        <div class="content save-block">
                                            <button @click="addNewImage">Upload image</button>
                                        </div>
                                        <span class="errorText" v-if="errorText">{{ errorText }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
        <modal name="editPartnerImage" @before-open="uploadEditPartnerImageHandler" @closed="removeStateNewPartner" :draggable="true">
            <div class="b-grid__item b-grid__item--1-1">
                <div class="content">
                    <div class="edit-form">
                        <div class="input-block">
                            <label>Edit image</label>
                            <div class="b-grid__list">
                                <div class="b-grid__item b-grid__item--1-1">
                                    <div class="input-block">
                                        <img src="" alt="" id="editPartnerImagePreview">
                                        <input type="file" name="picture" class="photo" id="editPartnerImgInput" />
                                        <div class="content save-block">
                                            <button @click="addNewPartnerImage">Upload image</button>
                                        </div>
                                        <span class="errorText" v-if="errorText">{{ errorText }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Navbar from './layouts/Navbar';
import { VueEditor } from 'vue2-editor';
import Spinner from './layouts/Spinner'

export default {
    name: 'EditIndex',
    components: {
        Navbar,
        Spinner
    },
    data () {
        return {
            content: '',
            images: [],
            partnerImages: [],
            uploadedImage: '',
            newMemberName: '',
            newMemberPosition: '',
            errorText: '',
            selectedIndexForEdit: '',
            newPartnerName: '',
            newPartnerLink: '',
            lang: 'en',
            loader: true,
            token: localStorage.getItem('token'),
            userId: localStorage.getItem('userId')
        }
    },
    methods: {
        getUserPhoto (src) {
            if(src.indexOf('data:image') === -1) return this.$host + '/ale-files/'+src
            return src;
        },
        changeLang (lang) {
            this.lang = lang
            this.getIndexPage()
        },
        backPage () {
            this.$router.push('/admin');
        },
        logout () {
            localStorage.removeItem('token');
            this.$router.push('/admin/login');
        },
        getIndexPage () {
            this.loader = true
            this.$http.get(`${this.$host}/alehub/index${this.lang==='ru'?'/ru':''}`, {
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept' : 'application/json'
                }
            }).then(response => {
                this.content = response.body[0];
                this.loader = false
                console.log(this.content)
            }, response => {

            })
        },
        saveIndexPage () {
            let newArray = [];

            for (let [key, value] of Object.entries(this.content)) {
                newArray.push({ "propName": key, "value": value })
            }

            let index = newArray[0].value;
            newArray.splice(0, 1);

            this.loader = true

            this.$http.post(`${this.$host}/alehub/index/${this.lang==='ru'?'ru/' + index :'' + index}`, 
                {
                    "data" : newArray,
                    "userId" : this.userId
                }, {
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept' : 'application/json',
                    'Authorization' : this.token
                }
            }).then(response => {
                this.loader = false
                console.log('S', response)
            }, response => {
                console.log('E', response)
            })
        },

        deleteMember (index) {
            this.content.team.participants.members.splice(index,1)
        },

        deletePartner (index) {
            this.content.partners.list.splice(index,1)
        },

        uploadImageHandler () {
            let input = document.querySelector("#imgInput");
            let _this = this
            input.addEventListener("change", function () {
                if (this.files[0]) {
                    let fr = new FileReader();
                    _this.errorText = ''

                    fr.addEventListener("load", function () {
                        let preview = document.querySelector("#imagePreview");
                        preview.src = fr.result;
                        preview.style.display = "block";
                        _this.images.push(input.value);
                        _this.uploadedImage = fr.result;
                    }, false);

                    fr.readAsDataURL(this.files[0]);
                }
            })
        },

        uploadImagePartnerHandler () {
            let input = document.querySelector("#imgPartnerInput");
            let _this = this
            input.addEventListener("change", function () {
                if (this.files[0]) {
                    let fr = new FileReader();
                    _this.errorText = ''

                    fr.addEventListener("load", function () {
                        let preview = document.querySelector("#imagePartnerPreview");
                        preview.src = fr.result;
                        preview.style.display = "block";
                        _this.partnerImages.push(input.value);
                        _this.uploadedImage = fr.result;
                    }, false);

                    fr.readAsDataURL(this.files[0]);
                }
            })
        },

        uploadEditImageHandler (event) {
            let _this = this;
            this.selectedIndexForEdit = event.params.index;
            setTimeout(() => {
                let input = document.querySelector("#editImgInput");
                let preview = document.querySelector("#editImagePreview");
                preview.src = event.params.image
                input.addEventListener("change", function () {
                    if (this.files[0]) {
                        let fr = new FileReader();
                        _this.errorText = ''

                        fr.addEventListener("load", function () {
                            preview.src = fr.result;
                            preview.style.display = "block";
                            _this.images.push(input.value);
                            _this.uploadedImage = fr.result;
                        }, false);

                        fr.readAsDataURL(this.files[0]);
                    }
                })
            }, 200);
        },

        uploadEditPartnerImageHandler (event) {
            let _this = this;
            this.selectedIndexForEdit = event.params.index;
            setTimeout(() => {
                let input = document.querySelector("#editPartnerImgInput");
                let preview = document.querySelector("#editPartnerImagePreview");
                preview.src = event.params.image
                input.addEventListener("change", function () {
                    if (this.files[0]) {
                        let fr = new FileReader();
                        _this.errorText = ''

                        fr.addEventListener("load", function () {
                            preview.src = fr.result;
                            preview.style.display = "block";
                            _this.partnerImages.push(input.value);
                            _this.uploadedImage = fr.result;
                        }, false);

                        fr.readAsDataURL(this.files[0]);
                    }
                })
            }, 200);
        },

        addNewMember () {
            if (this.uploadedImage === '')
                return this.errorText = 'Please input file';
            if (this.newMemberName === '')
                return this.errorText = 'Please input username';
            if (this.newMemberPosition === '')
                return this.errorText = 'Please input user position';
            this.content.team.participants.members.push({
                image: "", //this.uploadedImage
                name: this.newMemberName,
                position: this.newMemberPosition
            });
            this.$modal.hide('addNewMember');
        },

        addNewPartner () {
            if (this.uploadedImage === '')
                return this.errorText = 'Please input file';
            if (this.newPartnerName === '')
                return this.errorText = 'Please input name';
            this.content.partners.list.push({
                logo: "", //this.uploadedImage
                name: this.newPartnerName,
                link: this.newPartnerLink
            });
            this.$modal.hide('addNewPartner');
        },

        removeStateNewMember () {
            this.uploadedImage = '';
            this.newMemberName = '';
            this.newMemberPosition = '';
            this.errorText = '';
            this.selectedIndexForEdit = '';
        },

        removeStateNewPartner () {
            this.uploadedImage = '';
            this.newPartnerName = '';
            this.newPartnerLink = '';
            this.errorText = '';
            this.selectedIndexForEdit = '';
        },

        removeErrorText () {
            this.errorText = '';
        },

        openEditModal (index) {
            this.$modal.show('editMemberImage', { 
                image: this.content.team.participants.members[index].image,
                index: index
            })
        },

        openEditPartnerModal (index) {
            this.$modal.show('editPartnerImage', {
                image: this.content.partners.list[index].logo,
                index: index
            })
        },

        addNewImage () {
            this.content.team.participants.members[this.selectedIndexForEdit].image = this.uploadedImage
            this.$modal.hide('editMemberImage');
        },

        addNewPartnerImage () {
            this.content.partners.list[this.selectedIndexForEdit].logo = this.uploadedImage
            this.$modal.hide('editPartnerImage');
        }
    },
    created () {
        this.getIndexPage();
        if (!this.token) {
            this.$router.push('/admin/login')
        }
        this.$http.post(`${this.$host}/alehub/admin/checkToken`, 
            {
                "token" : this.token,
                "userId" : this.userId
            }, {
            headers : {
                'Content-Type' : 'application/json; charset=UTF-8',
                'Accept' : 'application/json'
            }
        }).then(response => {

        }, response => {
            localStorage.clear()
            this.$router.push('/admin/login')
        })
    }
}
</script>

<style lang="stylus">
    body {
        background-color #f5f8fa
    }

    .quillWrapper {
        position: relative;
        top: 25px;
        padding-bottom: 30px;
    }

    .v--modal
        padding 1em 1.5em
        height auto !important

        .b-grid__item
            padding 0

            .content
                border-radius 0
                box-shadow none

                .edit-form
                    padding 0

                    .photo
                        font-size 14px
                        
                    img
                        width 300px
                        height auto
</style>

<style src="../assets/less/style.css"></style>

<style scoped lang="stylus">
    .errorText {
        color red
    }

    .wrapper {
        .b-grid__item {
            padding 0
        }
    }	

    .content {
        width 100%
        height 100%
        background-color #ffffff
        border-radius 4px
        box-shadow: 0 1px 8px 0 rgba(0,0,0,0.25);

        .heading {
            display flex
            justify-content center
            align-items center
            justify-content space-between
            .title {
                text-align center
                font-family MuseoSansCyrl500
                font-size 26px
                color #333333
                margin 20px
            }

            .back {
                width 22px
                height 14px
                background-image url('../assets/img/back-ic.svg')
                background-size cover
                position relative
                left 30px
            }

            .lang {
                width 22px
                height 14px
                position relative
                right 30px
                cursor pointer
            }
        }
    }

    .indexPage {
        padding: 10px 15px 20px;
        .component-name {
            font-size: 20px;
        }
    }

    .edit-form {
        padding: 20px;

        .input-block {
            display: flex;
            flex-direction: column;

            label {
                font-size: 18px;
                margin-bottom: 10px;
            }

            textarea {
                resize: none;
                border-radius: 4px;
                border: 1px solid #ccc;
                font-size: 18px;
                padding: 10px;
                height: 50px;
                width: calc(100% - 20px);
            }

            input {
                font-size: 18px
                padding: 7px 10px
                border-radius: 4px
                border: 1px solid #ccc
                margin-bottom 5px
            }

            .edit {
                position relative
                left 240px
                bottom -10px
                cursor pointer
            }

            .delete {
                position relative
                left 270px
                bottom 20px
                cursor pointer
            }

            .b-grid__list {
                width 100%

                .b-grid__item {
                    padding: 0 10px

                    &:first-child {
                        padding-left: 0
                    }

                    &:last-child {
                        padding-right: 0
                    }

                    @media screen and (max-width: 760px) {
                        padding 15px 0 0 0    
                    }
                }
            }
        }

        .input-block:not(:first-child) {
            margin-top: 20px;
        }
    }

    .save-block {
        display: flex;
        justify-content: center;
        padding-top: 20px;

        button {
            width: 200px;
            background: #ffd24f;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .save-outer {
        margin-top: 20px
    }

    .item
        input
            max-width 300px

        textarea
            max-width 300px

    @media screen and (max-width: 1280px) {
		.b-grid__list {
			max-width 920px
		}

		.row {
			width 920px
		}
	}

	@media screen and (max-width: 1024px) {
		.b-grid__list {
			max-width 700px
		}

		.row {
			width 700px
		}
	}

	@media screen and (max-width: 760px) {
		.b-grid__list {
			max-width 100%
		}

		.row {
			width 100%
			border-radius: 0px
		}
	}
</style>