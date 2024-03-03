// show header
const scrollbar = document.getElementById("root");
const header = document.getElementById("header");
const demoBuyBtn = document.getElementById("demo-btn-buy");
const headerMenu = document.querySelector(".header_m");
let scroll = 0;

function scrolled(e) {
  scrollbar.context = window.pageYOffset;
  const currentScroll = window.pageYOffset;
  if (currentScroll < scroll) {
    header.classList.add("header-show");
    headerMenu.classList.remove("header_m-active");
    document.querySelector(".header_menu-main").classList.add("menu-active");
    document
      .querySelector(".header_menu-close")
      .classList.remove("menu-active");
  } else {
    header.classList.remove("header-show");
    headerMenu.classList.remove("header_m-active");
    document.querySelector(".header_menu-main").classList.add("menu-active");
    document
      .querySelector(".header_menu-close")
      .classList.remove("menu-active");
  }
  scroll = currentScroll;
}
window.addEventListener("scroll", scrolled);

// scroll into view
$(document).ready(function () {
  $(".nav-item").on("click", (e) => {
    const position = $(e.target.hash).offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, "smooth");
  });
  $("#header-logo").on("click", () => {
    $("html,body").animate({ scrollTop: 0 }, "smooth");
  });
  // btn buy
setInterval(() => {
  demoBuyBtn.classList.toggle("demo-btn");
}, 1000);

$(".header_m-item").on("click", (e) => {
  const position = $(e.target.hash).offset().top;
  $("HTML, BODY").animate({ scrollTop: position }, "smooth");
  $(".header_m").removeClass("header_m-active");
  $(".header_menu-main").toggleClass("menu-active");
  $(".header_menu-close").toggleClass("menu-active");
});
// remove active header menu mobile
$("#header-logo").on("click", () => {
  $("html,body").animate({ scrollTop: 0 }, "smooth");
  if ($(".header_m").hasClass("header_m-active")) {
    $(".header_m").removeClass("header_m-active");
    $(".header_menu-main").addClass("menu-active");
    $(".header_menu-close").removeClass("menu-active");
  }
});
// show header on mobile
$(".header_menu").on("click", () => {
  $(".header_m").toggleClass("header_m-active");
  $(".header_menu-main").toggleClass("menu-active");

  $(".header_menu-close").toggleClass("menu-active");
});
// hover price
$(".price_item").on("hover", function (e) {
  $(this).siblings().removeClass("price_item-active");
  $(this).addClass("price_item-active");

  $(this).siblings().children().last().removeClass("price_item-btn-active");
  $(this).children().last().toggleClass("price_item-btn-active");
});



// active modal buy
$(".nav-btn").on("click", () => {
  $("#modal").addClass("modal-active");
});
$(".price_item-btn").on("click", () => {
  $("#modal").addClass("modal-active");
});
$(".footer_btn-button").on("click", () => {
  $("#modal").addClass("modal-active");
});
$(".banner-btn").on("click", () => {
  $("#modal").addClass("modal-active");
});

// remove modal
$("#close-btn").on("click", () => {
  $("#modal").removeClass("modal-active");
});
// active advertise
setTimeout(() => {
  $(".advertise").addClass("advertise-active");
}, 5000);
$(".advertise").on("click", () => {
  $(".advertise").removeClass("advertise-active");
});

$(".ad_close").on("click", () => {
  $(".advertise").removeClass("advertise-active");
});
$(".ad_wrapper").on("click", (e) => {
  e.stopPropagation();
});
$(".demo_image-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  draggable: false,
  prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
  nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        infinite: false,
      },
    },
  ],
  autoplay: true,
  autoplaySpeed: 3000,
});
// /////question

const questions = [
  {
    question: "ChatGPT là gì ?",
    answer:
      "ChatGPT là một mô hình ngôn ngữ trí tuệ nhân tạo do OpenAI đào tạo, dựa trên kiến trúc GPT-3.5. Nó có thể hiểu và phản hồi đầu vào ngôn ngữ tự nhiên.",
  },
  {
    question: "Sử dụng ChatGPT như thế nào ?",
    answer:
      "Chỉ cần nhập câu hỏi hoặc từ khóa của bạn vào hộp nhập và ChatGPT sẽ tạo phản hồi dựa trên hiểu biết của bạn về thông tin đầu vào của bạn.",
  },
  {
    question: "ChatGPT có thể trả lời được những chủ đề nào ?",
    answer:
      "ChatGPT có nhiều kiến thức về các chủ đề khác nhau, bao gồm khoa học, công nghệ, lịch sử, văn học, v.v. Tuy nhiên, xin lưu ý rằng phản hồi của ChatGPT dựa trên dữ liệu đào tạo và có thể không phải lúc nào cũng chính xác hoàn toàn.",
  },
  {
    question: "ChatGPT có thể thay thế các chuyên gia không ?",
    answer:
      "ChatGPT có thể cung cấp thông tin chung và gợi ý, nhưng nó không thể thay thế cho lời khuyên chuyên nghiệp. Nếu bạn có một vấn đề hoặc câu hỏi cụ thể cần lời khuyên của chuyên gia, vui lòng tham khảo ý kiến của một chuyên gia có trình độ.",
  },
  {
    question: "ChatGPT có miễn phí không ?",
    answer:
      "Có nhé, khi sử dụng ChatGPT bản basic bạn sẽ không phải trả bất kỳ phí ngoài tiền mạng :D. Tuy nhiên, các bản nâng cao hơn sẽ đòi hỏi chút phí và bạn sẽ có được trải nghiệm tốt hơn.",
  },
  {
    question:
      "Quyền riêng tư của tôi có được bảo vệ khi sử dụng ChatGPT không ?",
    answer:
      "OpenAI rất coi trọng quyền riêng tư của người dùng và không thu thập hay lưu trữ bất kỳ thông tin cá nhân nào từ người dùng ChatGPT. Tuy nhiên, xin lưu ý rằng mọi thông tin bạn chia sẻ với ChatGPT có thể được lưu trữ trong bộ nhớ của ChatGPT trong một khoảng thời gian ngắn để tạo điều kiện thuận lợi cho cuộc trò chuyện.",
  },
];
  const htmls = questions.map((ques, index) => {
    return `
    <div class="question_item" data-index=${index}>
      <div class="question_item-question">
        <p>
          <i class="fa-regular fa-circle-question"></i>
          <span>${ques.question}</span>
        </p> 
        <div class="icon-question">
        <i  class="icon-minus-${index} fa-solid fa-minus"></i> 
        <i class="icon-plus-${index} icon-active fa-solid fa-plus"></i>
        </div>
      </div>
      <div class="question_item-answer index-answer-${index}">
        ${ques.answer}</div>
    </div>
    `;
  });
  $(".question_lists").html(htmls);
  $(".question_item").on("click", function () {
    const index = $(this).data("index");
    $(`.index-answer-${index}`).toggleClass("answer-active");
    $(`.icon-minus-${index}`).toggleClass("icon-active");
    $(`.icon-plus-${index}`).toggleClass("icon-active");
  });
  // validate form buy////
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phone = $(".input-phone");
const name = $(".input-name");
const email = $(".input-email");
const messagePhone = $(".message-phone");
const messageName = $(".message-name");
const messageEmail = $(".message-email");

phone.on("blur", function () {
  phone.val()
    ? messagePhone.text("")
    : messagePhone.text("Vui lòng nhập thông tin!");
});
phone.on("input", function () {
  phone.val()
    ? messagePhone.text("")
    : messagePhone.text("Vui lòng nhập thông tin!");
});
// name
name.on("blur", function () {
  name.val()
    ? messageName.text("")
    : messageName.text("Vui lòng nhập thông tin!");
});
name.on("input", function () {
  name.val()
    ? messageName.text("")
    : messageName.text("Vui lòng nhập thông tin!");
});
// email
email.on("blur", function () {
  if (email.val()) {
    if (regex.test(email.val())) {
      messageEmail.text("");
    } else {
      messageEmail.text("Email không đúng. Vui lòng nhập lại!");
    }
  } else {
    messageEmail.text("Vui lòng nhập thông tin!");
  }
});
email.on("input", function () {
  email.val()
    ? messageEmail.text("")
    : messageEmail.text("Vui lòng nhập thông tin!");
});
// submit form buy
$("#btn-submit-form").on("click", function () {
  if (regex.test(email.val()) && name.val() && phone.val()) {
    $("#modal").removeClass("modal-active");
    $(".toast").addClass("toast-show");
    setTimeout(() => {
      $(".toast").removeClass("toast-show");
    }, 5000);
    phone.val("");
    name.val("");
    email.val("");
  } else {
    phone.val()
      ? messagePhone.text("")
      : messagePhone.text("Vui lòng nhập thông tin!");
    name.val()
      ? messageName.text("")
      : messageName.text("Vui lòng nhập thông tin!");
    if (email.val()) {
      if (regex.test(email.val())) {
        messageEmail.text("");
      } else {
        messageEmail.text("Email không đúng. Vui lòng nhập lại!");
      }
    } else {
      messageEmail.text("Vui lòng nhập thông tin!");
    }
  }
});
// submit form buy with enter
$(".input-email").keypress(function (event) {
  var keycode = event.keyCode ? event.keyCode : event.which;
  if (keycode == "13") {
    if (regex.test(email.val()) && name.val() && phone.val()) {
      $("#modal").removeClass("modal-active");
      $(".toast").addClass("toast-show");
      setTimeout(() => {
        $(".toast").removeClass("toast-show");
      }, 5000);
      phone.val("");
      name.val("");
      email.val("");
    } else {
      phone.val()
        ? messagePhone.text("")
        : messagePhone.text("Vui lòng nhập thông tin!");
      name.val()
        ? messageName.text("")
        : messageName.text("Vui lòng nhập thông tin!");
      if (email.val()) {
        if (regex.test(email.val())) {
          messageEmail.text("");
        } else {
          messageEmail.text("Email không đúng. Vui lòng nhập lại!");
        }
      } else {
        messageEmail.text("Vui lòng nhập thông tin!");
      }
    }
  }
});





});













// valide form advertise
  const messageName = $(".message-name-ad");
  const messageEmail = $(".message-email-ad");
  const name = $(".input-name-ad");
  const email = $(".input-email-ad");

  name.on("blur", function () {
    name.val()
      ? messageName.text("")
      : messageName.text("Vui lòng nhập thông tin!");
  });
  name.on("input", function () {
    name.val()
      ? messageName.text("")
      : messageName.text("Vui lòng nhập thông tin!");
  });
  // email
  email.on("blur", function () {
    if (email.val()) {
      if (regex.test(email.val())) {
        messageEmail.text("");
      } else {
        messageEmail.text("Email không đúng. Vui lòng nhập lại!");
      }
    } else {
      messageEmail.text("Vui lòng nhập thông tin!");
    }
  });
  email.on("input", function () {
    email.val()
      ? messageEmail.text("")
      : messageEmail.text("Vui lòng nhập thông tin!");
  });
  // submit ad
  $("#ad_bottom-btn").on("click", function () {
    if (regex.test(email.val()) && name.val()) {
      $(".advertise").removeClass("advertise-active");
      $(".toast").addClass("toast-show");
      setTimeout(() => {
        $(".toast").removeClass("toast-show");
      }, 5000);
      name.val("");
      email.val("");
    } else {
      name.val()
        ? messageName.text("")
        : messageName.text("Vui lòng nhập thông tin!");
      if (email.val()) {
        if (regex.test(email.val())) {
          messageEmail.text("");
        } else {
          messageEmail.text("Email không đúng. Vui lòng nhập lại!");
        }
      } else {
        messageEmail.text("Vui lòng nhập thông tin!");
      }
    }
  });
  // submit with enter
  $(".input-email-ad").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      if (regex.test(email.val()) && name.val()) {
        $(".advertise").removeClass("advertise-active");
        $(".toast").addClass("toast-show");
        setTimeout(() => {
          $(".toast").removeClass("toast-show");
        }, 5000);
        name.val("");
        email.val("");
      } else {
        name.val()
          ? messageName.text("")
          : messageName.text("Vui lòng nhập thông tin!");
        if (email.val()) {
          if (regex.test(email.val())) {
            messageEmail.text("");
          } else {
            messageEmail.text("Email không đúng. Vui lòng nhập lại!");
          }
        } else {
          messageEmail.text("Vui lòng nhập thông tin!");
        }
      }
    }
  });

// test input demo
const listTest = [
  {
    textUser: "Bạn là ai?",
    textGPT:
      "Tôi là ChatGPT, một mô hình ngôn ngữ lớn được đào tạo bởi OpenAI để trả lời các câu hỏi và cung cấp thông tin cho người dùng. Tôi không phải là một con người thực sự, mà chỉ là một chương trình máy tính được thiết kế để tương tác với con người qua các cuộc trò chuyện trên mạng.",
  },
];
$(document).ready(function () {
  const input = $(".test_input");
  const btn = $(".test_btn");
  // test_item-active
  const htmls = listTest.map((item, index) => {
    return `
          <div class="test_item">
            <div class="test_item-body">
                <div class="test_item-image">
                    <img src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png
                            "/>
                </div>
              <div class="test_item-text">${item.textUser}</div>
            </div>
          </div>

          <div class="test_item test_item-active">
              <div class="test_item-body">
                  <div class="test_item-image">
                    <img src="https://res.cloudinary.com/dhglwzgm3/image/upload/v1679243180/Vector_ht54xj.svg"/>
                  </div>
                <div class="test_item-text">${item.textGPT}</div>
              </div>
          </div> 

                      
    `;
  });
  $(".test-body").html(htmls);

  btn.on("click", function () {
    listTest.unshift({
      textUser: input.val(),
      textGPT:
        "Xin lỗi tôi chỉ là bản demo! Hãy đăng kí ngay để có những trải nghiệm thú vị nào.",
    });
    const htmls = listTest.map((item, index) => {
      return `
            <div class="test_item">
              <div class="test_item-body">
                  <div class="test_item-image">
                      <img src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png
                              "/>
                  </div>
                <div class="test_item-text">${item.textUser}</div>
              </div>
            </div>
  
            <div class="test_item test_item-active">
                <div class="test_item-body">
                    <div class="test_item-image">
                      <img src="https://res.cloudinary.com/dhglwzgm3/image/upload/v1679243180/Vector_ht54xj.svg"/>
                    </div>
                  <div class="test_item-text">${item.textGPT}</div>
                </div>
            </div> 
  
                        
      `;
    });
    $(".test-body").html(htmls);
    input.val("");
  });
  //submit enter tu ban phim
  input.keypress(function (event) {
    const keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
      listTest.unshift({
        textUser: input.val(),
        textGPT:
          "Chúc bạn một ngày tốt lành.Xin lỗi tôi chỉ là bản demo, nên không thể giúp bạn trò chuyện bây giờ! Hãy đăng kí ngay để giao lưu và có những trải nghiệm thú vị với tôi nào.",
      });
      const htmls = listTest.map((item, index) => {
        return `
              <div class="test_item">
                <div class="test_item-body">
                    <div class="test_item-image">
                        <img src="https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png
                                "/>
                    </div>
                  <div class="test_item-text">${item.textUser}</div>
                </div>
              </div>
    
              <div class="test_item test_item-active">
                  <div class="test_item-body">
                      <div class="test_item-image">
                        <img src="https://res.cloudinary.com/dhglwzgm3/image/upload/v1679243180/Vector_ht54xj.svg"/>
                      </div>
                    <div class="test_item-text">${item.textGPT}</div>
                  </div>
              </div> 
    
                          
        `;
      });
      $(".test-body").html(htmls);
      input.val("");
    }
  });
});
