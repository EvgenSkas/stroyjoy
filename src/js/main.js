import 'bootstrap'
import $ from '../local_modules/jquery/dist/jquery.min'
import '../local_modules/bootstrap/dist/js/bootstrap.min.js'

$(document).ready(() => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  // var forms = document.getElementsByClassName("needs-validation");
  // // Loop over them and prevent submission
  // var validation = Array.prototype.filter.call(forms, function (form) {
  //   form.addEventListener(
  //     "submit",
  //     function (event) {
  //       if (form.checkValidity() === false) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       form.classList.add("was-validated");
  //     },
  //     false
  //   );
  // });

  // console.log('validation', validation)

  $('#form').submit(function (e) {
    e.preventDefault()
    const form = document.getElementById('form')
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      var form_data = $(this).serialize() // Собираем все данные из формы
      console.log('submit', form_data)
      $.ajax({
        type: 'POST', // Метод отправки
        url: 'php/send.php', // Путь до php файла отправителя
        data: form_data,
        success: function () {
          console.log('!!!!test')
          // Код в этом блоке выполняется при успешной отправке сообщения
          alert('Ваше сообщение отправлено!')
        },
        error: function (xhr) {
          alert('Извинете, что-то пошло не так(')
        }
      })
    }
    form.classList.add('was-validated')
  })

  // ----------------------------CALCULATE COST------------------------

  let questionPageNumber = 0

  const questionPages = ['.roof-calc-card', 'input[name=radio]', '.skat-calc-card', '.range', '.city']

  function getActiveData (page) {
    console.log('page', page)
    if (questionPageNumber === 0 || questionPageNumber === 2) {
      $(page).each(function () {
        if ($(this).hasClass('active')) console.log('getCardData', $(this).attr('data-type'))
      })
    } else if (questionPageNumber === 1) {
      $(page).each(function () {
        if ($(this)[0].checked) console.log('getCardData', $(this).attr('data-type'))
      })
    } else if (questionPageNumber === 3 || questionPageNumber === 4) {
      $(page).each(function () {
        console.log('getCardData', $(this).val())
      })
    }
  }

  function enableNextButton () {
    $('#next button').removeAttr('disabled').removeClass('btn-disabled').addClass('btn-success')
  }

  function disableNextButton () {
    console.log('next', $('#next button'))
    $('#next button').attr('disabled', true).addClass('btn-disabled').removeClass('btn-success')
  }

  $('#next').click((e) => {
    e.preventDefault()
    let visbleElementIndex
    const questions = $('.question')
    questions.each(function (i, elem) {
      if (!$(this).hasClass('d-none')) visbleElementIndex = i
    })
    questions[visbleElementIndex].classList.add('d-none')
    if (visbleElementIndex + 1 < questions.length) {
      questions[visbleElementIndex + 1].classList.remove('d-none')
    } else {
      questions[0].classList.remove('d-none')
    }

    getActiveData(questionPages[questionPageNumber])
    questionPageNumber += 1
    disableNextButton()
  })

  $('.roof-calc-card').click(function (e) {
    e.preventDefault()
    $('.roof-calc-card').each(function () {
      $(this).removeClass('active')
    })
    $(this).addClass('active')
    enableNextButton()
  })

  $('.skat-calc-card').click(function (e) {
    e.preventDefault()
    $('.skat-calc-card').each(function () {
      $(this).removeClass('active')
    })
    $(this).addClass('active')
    enableNextButton()
  })

  $('.options').click(function (e) {
    enableNextButton()
  })

  $('input[name=square]').change(function () {
    var newval = $(this).val()
    $('#squareValue').text(`${newval} кв.м.`)
    enableNextButton()
  })

  $('input[name=city]').focus(function (e) {
    enableNextButton()
  })

  $('#form2').submit(function (e) {
    e.preventDefault()
    const form = document.getElementById('form2')
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      var form_data = $(this).serialize() // Собираем все данные из формы
      console.log('submit', form_data)
      $.ajax({
        type: 'POST', // Метод отправки
        url: 'php/send.php', // Путь до php файла отправителя
        data: form_data,
        success: function () {
          console.log('!!!!test')
          // Код в этом блоке выполняется при успешной отправке сообщения
          alert('Ваше сообщение отправлено!')
        },
        error: function (xhr) {
          alert('Извинете, что-то пошло не так(')
        }
      })
    }
    form.classList.add('was-validated')
  })

  // (async () => console.log(window.Bootstrap))();

  // var triggerEl = document.querySelector('#myTab a[href="#profile"]');
  // window.bootstrap.Tab.getInstance(triggerEl).show(); // Select tab by name

  // var triggerFirstTabEl = document.querySelector("#myTab li:first-child a");
  // window.bootstrap.Tab.getInstance(triggerFirstTabEl).show(); // Select first tab
})
