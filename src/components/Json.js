export const userList = [
    {
        "id": 1,
        "first_name": "Bill",
        "last_name": "Smith",
        "full_name": "Bill Smith"
    },
    {
        "id": 3,
        "first_name": "Stella",
        "last_name": "Kirkwood",
        "full_name": "Stella Kirkwood"
    },
    {
        "id": 5,
        "first_name": "Abigail",
        "last_name": "Metcalfe",
        "full_name": "Abigail Metcalfe"
    },
    {
        "id": 26,
        "first_name": "Audrey",
        "last_name": "Robert",
        "full_name": "Audrey Robert"
    },
    {
        "id": 138,
        "first_name": "Michael",
        "last_name": "Hillgrove",
        "full_name": "Michael Hillgrove"
    },
    {
        "id": 161,
        "first_name": "Connor",
        "last_name": "Perkin",
        "full_name": "Connor Perkin"
    },
    {
        "id": 228,
        "first_name": "Kiara",
        "last_name": "Holder",
        "full_name": "Kiara Holder"
    },
    {
        "id": 230,
        "first_name": "Cooper",
        "last_name": "Wilhelm",
        "full_name": "Cooper Wilhelm"
    },
    {
        "id": 251,
        "first_name": "Zoe",
        "last_name": "Moubray",
        "full_name": "Zoe Moubray"
    },
    {
        "id": 410,
        "first_name": "Lilian",
        "last_name": "Scantlebury",
        "full_name": "Lilian Scantlebury"
    },
    {
        "id": 431,
        "first_name": "Flynn",
        "last_name": "Willshire",
        "full_name": "Flynn Willshire"
    },
    {
        "id": 453,
        "first_name": "Hamish",
        "last_name": "Oatley",
        "full_name": "Hamish Oatley"
    },
    {
        "id": 455,
        "first_name": "Ashley",
        "last_name": "Haugh",
        "full_name": "Ashley Haugh"
    },
    {
        "id": 476,
        "first_name": "Sebastian",
        "last_name": "Duckworth",
        "full_name": "Sebastian Duckworth"
    },
    {
        "id": 498,
        "first_name": "Jett",
        "last_name": "Nash",
        "full_name": "Jett Nash"
    },
    {
        "id": 500,
        "first_name": "Isabella",
        "last_name": "Heading",
        "full_name": "Isabella Heading"
    },
    {
        "id": 635,
        "first_name": "Andrew",
        "last_name": "Kindler",
        "full_name": "Andrew Kindler"
    },
    {
        "id": 680,
        "first_name": "Eve",
        "last_name": "Haller",
        "full_name": "Eve Haller"
    },
    {
        "id": 723,
        "first_name": "Taylah",
        "last_name": "Humffray",
        "full_name": "Taylah Humffray"
    },
    {
        "id": 746,
        "first_name": "Lucy",
        "last_name": "Broger",
        "full_name": "Lucy Broger"
    }
]

export const userAvatar = [
    {
        "id": 1,
        "avatar": "https://i.pravatar.cc/150?img=4"
    },
    {
        "id": 3,
        "avatar": "https://i.pravatar.cc/150?img=3"
    },
    {
        "id": 5,
        "avatar": "https://i.pravatar.cc/150?img=4"
    },
    {
        "id": 26,
        "avatar": "https://i.pravatar.cc/150?img=5"
    },
    {
        "id": 138,
        "avatar": "https://i.pravatar.cc/150?img=6"
    },
    {
        "id": 161,
        "avatar": "https://i.pravatar.cc/150?img=7"
    },
    {
        "id": 228,
        "avatar": "https://i.pravatar.cc/150?img=8"
    },
    {
        "id": 230,
        "avatar": "https://i.pravatar.cc/150?img=9"
    },
    {
        "id": 251,
        "avatar": "https://i.pravatar.cc/150?img=10"
    },
    {
        "id": 410,
        "avatar": "https://i.pravatar.cc/150?img=11"
    },
    {
        "id": 431,
        "avatar": "https://i.pravatar.cc/150?img=12"
    },
    {
        "id": 453,
        "avatar": "https://i.pravatar.cc/150?img=13"
    },
    {
        "id": 455,
        "avatar": "https://i.pravatar.cc/150?img=14"
    },
    {
        "id": 476,
        "avatar": "https://i.pravatar.cc/150?img=15"
    },
    {
        "id": 498,
        "avatar": "https://i.pravatar.cc/150?img=16"
    },
    {
        "id": 500,
        "avatar": "https://i.pravatar.cc/150?img=17"
    },
    {
        "id": 635,
        "avatar": "https://i.pravatar.cc/150?img=18"
    },
    {
        "id": 680,
        "avatar": "https://i.pravatar.cc/150?img=19"
    },
    {
        "id": 723,
        "avatar": "https://i.pravatar.cc/150?img=20"
    },
    {
        "id": 746,
        "avatar": "https://i.pravatar.cc/150?img=21"
    }
]


// function funFilterObject(userlist, useravatar) {
//     let temp = [];
//     temp = userlist.map((obj) => {
//         let index = useravatar.findIndex((element) => element['id'] === obj['id']);
//         return index !== -1 ? { ...obj, ...useravatar[index] } : {}
//     });
//     return temp;

// }

// let finalData = funFilterObject(userList, userAvatar);

// export default finalData;