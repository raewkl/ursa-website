import React, { Component } from "react";

class Faq extends Component {
  componentDidMount() {
    this.accordionListener();
  }

  componentWillUnmount() {
    this.accordionListener();
  }

  accordionListener = () => {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", () => this.accordionAnimation(acc[i]));
    }
  };

  accordionAnimation = ele => {
    let panel = ele.nextElementSibling;
    let spinner = ele.lastChild;

    if (panel.style.maxHeight) {
      spinner.classList.remove("spinClockwise");
      panel.style.maxHeight = null;
      spinner.classList.add("spinCounter");
    } else {
      spinner.classList.remove("spinCounter");
      panel.style.maxHeight = panel.scrollHeight + "px";
      spinner.classList.add("spinClockwise");
    }
  };

  render() {
    return (
      <div className="wrapper faqContainer" id="faq">
        <h1>FAQ</h1>

        <ul className="questions">
          <li>
            <button className="questionSub accordion">
              <div className="questionExpand">
                <h2>What’s an Income Share Agreement?</h2>
              </div>
              <div className="plusExpand">
                <span className="horizontal"></span>
                <span className="vertical"></span>
              </div>
            </button>
            <div className="answer">
              <p>
                An Income Share Agreement or ISA is an alternative to loans to
                pay for tuition. We’ll pay for your tuition upfront, and you pay
                us back with a share of your income when you start working.
                Education providers who work with us are agreeing to defer a
                portion of tuition until you start working, so we’re all in this
                together.
              </p>
              <p>An ISA has 4 key components:</p>
              <ul className="isaComponents">
                <li>
                  <em>Minimum Threshold:</em> You only start paying when you
                  earn more than this amount.
                </li>
                <li>
                  <em>Income Share:</em> After graduation, this is the % of your
                  earnings you agree to pay to the contract monthly, so long as
                  you make more than the Minimum Threshold. Since it’s a
                  percentage of what you make.
                </li>
                <li>
                  <em>Payment Term:</em> This is the total lifetime of the
                  contract. Your payment obligations end when the Payment Term
                  ends (or if you hit the Payment Cap!)
                </li>
                <li>
                  <em>Payment Cap:</em> This is defined as a multiple of the
                  tuition amount covered. Unlike loans, this number will never
                  grow. You will never pay us more than the Payment Cap.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button className="questionSub accordion">
              <div className="questionExpand">
                <h2>Am I eligible?</h2>
              </div>
              <div className="plusExpand">
                <span className="horizontal"></span>
                <span className="vertical"></span>
              </div>
            </button>
            <div className="answer">
              <p>
                We currently work with schools in Canada and the US. Check with
                your education provider or hit us up here. You will also need to
                be authorized to work in those countries.
              </p>
            </div>
          </li>
          <li>
            <button className="questionSub accordion">
              <div className="questionExpand">
                <h2>How does this compare with a loan?</h2>
              </div>
              <div className="plusExpand">
                <span className="horizontal"></span>
                <span className="vertical"></span>
              </div>
            </button>
            <div className="answer">
              <p>
                We sometimes compare ISAs directly with loan APRs (annual
                percentage rates), but that’s not entirely a great comparison
                since APRs project growth of a balance and ISAs don’t grow. So
                you might end up paying us back more than the original amount of
                tuition, but that will only happen if you’re doing really well!
                At the end of the day, it’s a way for you to pay for tuition
                without having to worry about the costs upfront.
              </p>
            </div>
          </li>
          <li>
            <button className="questionSub accordion">
              <div className="questionExpand">
                <h2>
                  If I sign an ISA, will I have to work in my field of study
                  after graduation?
                </h2>
              </div>
              <div className="plusExpand">
                <span className="horizontal"></span>
                <span className="vertical"></span>
              </div>
            </button>
            <div className="answer">
              <p>
                Of course not! What you want to do is entirely up to you. We are
                here to support you if you need us, in whatever career you are
                interested in.
              </p>
            </div>
          </li>
          <li>
            <button className="questionSub accordion">
              <div>
                <h2>Why are you doing this?</h2>
              </div>
              <div className="plusExpand">
                <span className="horizontal"></span>
                <span className="vertical"></span>
              </div>
            </button>
            <div className="answer">
              <p>
                We’re taking this on because the world is getting more and more
                specialised and training and education are key. Life is
                expensive as is, and for education, loans just don’t really make
                sense. We think ISAs could really change the game on how we pay
                for education in the future, putting investors on the same side
                as students and letting education providers show accountability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Faq;
