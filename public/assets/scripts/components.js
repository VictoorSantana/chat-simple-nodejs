




class Components {


    constructor() {

    }


    newFriend = function(
        key= 0,
        url_photo = 'https://via.placeholder.com/75x75?text=User', 
        name = 'Lorem ipsum',
        clickCancelClass,
        clickCheckClass,
        ) {


        return `        
        <span class="position-relative cursor-default d-flex justify-content-between align-items-center p-1">
            <div class="d-flex align-items-center">
                <img src="${url_photo}"
                    class="m-1 d-inline-block rounded-circle cursor-pointer mr-2"
                    style="width: 50px;height:50px" alt="12">
                <div>
                <p class="text-white m-0" style="font-weight: 400;">${name}</p>
                <p class="text-secondary m-0 small" style="font-weight: 400;">Solicitação de amizade</p>
                </div>
            </div>
            <div>
                <button type="button" class="btn btn-dark text-success ${clickCheckClass}" key="${key}"> <i class="fas fa-check"></i>
                </button>
                <button type="button" class="btn btn-dark text-danger ${clickCancelClass}" key=${key}> <i class="fas fa-times"></i>
                </button>
            </div>
        </span>
        `
    }



    friend = function(
        key=0,
        url_photo = 'https://via.placeholder.com/75x75?text=User', 
        name="",        
        clickClass
    ) {
        return `
        <span
        key="${key}"
            class="btn btn-dark cursor-pointer ${clickClass} position-relative btn-block text-left d-flex align-items-center p-1">
            <img src="${url_photo}"
                class="m-1 d-inline-block rounded-circle cursor-pointer mr-2"
                style="width: 50px;height:50px" alt="12">
            <div>
                <p class="text-white m-0" style="font-weight: 400;">${name}</p>                                
            </div>
        </span>
        `
    }
}