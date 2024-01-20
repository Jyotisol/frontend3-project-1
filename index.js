# const container = document.getElementById("container");
# const loader = document.querySelector(".loader");

# let state = [];
# let isMenu = false;

# function getMenu() {
#     fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
#         .then(res => res.json())
#         .then((data) => {
#             container.style.display = "grid";
#             loader.style.display = "none";
#             data.forEach(ele => {
#                 state.push(ele);
#                 let card = document.createElement("div");
#                 card.id = `card${ele.id}`;
#                 card.className = "card";
#                 card.innerHTML = `
#                     <div class="photo">
#                         <img src="${ele.imgSrc}" alt="${ele.name}">
#                     </div>
#                     <div class="bottom flex">
#                         <div>
#                             <h3>${ele.name}</h3>
#                             <p>$${ele.price} /-<p>
#                         </div>
#                         <div class="add" onclick="add('${card.id}')">
#                             <i class="fa-solid fa-plus"></i>
#                         </div>
#                     </div>
#                 `;
#                 container.appendChild(card);
#             });
#         })
#         .catch((err) => {
#             console.log(err);
#         });
# }

# function add(id) {
#     console.log(id);
# }

# function takeOrder() {
#     return new Promise((resolve, reject) => {
#         setTimeout(() => {
#             let order = {
#                 orders: []
#             };
#             let x = 3;
#             while (x-- > 0) {
#                 let index = parseInt(Math.random() * 1000);
#                 index = index % state.length;
#                 order.orders.push(state[index]);
#             }
#             resolve(order);
#         }, 2500);
#     });
# }

# function orderPrep(obj) {
#     return new Promise((resolve, reject) => {
#         setTimeout(() => {
#             obj.order_status = true;
#             obj.paid = false;
#             resolve(obj);
#         }, 1500);
#     });
# }

# function payOrder(obj) {
#     return new Promise((resolve, reject) => {
#         setTimeout(() => {
#             obj.order_status = true;
#             obj.paid = true;
#             resolve(obj);
#         }, 1000);
#     });
# }

# function thankyouFnc() {
#     alert("Thank you for eating with us today!");
# }

# document.querySelector(".menu").addEventListener('click', (e) => {
#     document.querySelector(".hero").style.display = "none";
#     document.querySelector(".hand").style.display = "none";
#     isMenu = true;
#     takeOrder()
#         .then((data) => {
#             console.log("After Taking Order", data);
#             return orderPrep(data);
#         })
#         .then((data) => {
#             console.log("After Order Prep", data);
#             return payOrder(data);
#         })
#         .then((data) => {
#             console.log("After Payout", data);
#             thankyouFnc();
#         })
#         .catch((err) => {
#             console.log(err);
#         });
# });

# setTimeout(() => {
#     if (!isMenu) alert("To see the Menu Page Please Click on the Menu");
# }, 2000);

# getMenu();
