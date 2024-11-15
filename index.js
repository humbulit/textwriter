const robot = require('robotjs')

const text = 
`The works of William Golding, "Lord of the Flies," and Shirley Jackson, "The Lottery," are two of the most prominent works that live by the idea of breakdown in society and innate savagery: degeneration into utter chaos with the boys on the island in "Lord of the Flies" and blind adherence to a brutal ritual by villagers in "The Lottery.". The same ideas are incorporated through characters in both stories: Ralph versus Jack in "Lord of the Flies" and their respective battles between civilization and savagery, and Tessie Hutchinson in "The Lottery," who becomes a target of the viciousness of society. Description in Golding's novel shows the gradual transformation of the island from paradise to hell; for example, ".The world, that understandable and lawful world, was slipping away.". Jackson has told the story in a very detached way. As the result of such narration, it turns out to be routine-like with sprinkles of horror. An example is where the lottery is going to take place: ".The morning of June 27th was clear and sunny, with the fresh warmth of a full-summer day." (Jackson 1).
 "The Lottery" shows an allegory for psychological forces as an exemplar of the id, ego, and superego. This can be well explained by the fact that the primal wants-bloodlust-are directly related to the villagers' id. The lottery represents the ego, or those rules of society that condone the ritual, and the superego is represented by the en-mass conscience which enforces the lottery unquestionably. There are parallel psychological forces at work in "Lord of the Flies" in Chapter 9. For example, the fear of the "beast" is an id-driven motivator behind the boys' actions while the structured environment they set up, which is supposed to be the ego, breaks down in the face of primal instincts. Jack symbolizes the id, Ralph the ego, while Piggy the superego. Jackson writes, "Although the villagers had forgotten the ritual and lost the original black box, they still remembered to use stones" (Jackson 4), where it is evident that the id fueled the violence, which paralleled amongst the boys' savagery.

Irony is also carried heavily in both stories. The title "The Lottery" seems something good to anticipate but leads to an abhorrent execution, which is situational irony. Specific examples of such dramatic irony include that in "The Lottery," where Tessie Hutchinson is so nonchalant with regard to the ritual, which turns desperate when she gets picked, whereas in "Lord of the Flies," Simon attempts to reveal the truth and gets tragically killed by the boys in a frenzied misunderstanding, which is situational irony. Jackson writes, "Tessie Hutchinson was in the center of a cleared space by now, and she held her hands out desperately as the villagers moved in on her" (Jackson 7). Golding describes the frenzy of the boys: "At once the crowd surged after it, poured down the rock, leapt on to the beast, screamed, struck, bit, tore" (Golding 153).

Both these authors, Golding and Jackson, suggest that beneath the veneer of civilization lies the capability to act brutally and irrationally. Golding uses the boys' savage degradation to assert that the dictates of society are thin veils greasing our animal instincts. Jackson criticizes the mindless continuance of violence and tradition through a depiction of the blind adherence of the townspeople to a barbaric ritual. Golding writes, "The mask was a thing on its own, behind which Jack hid, liberated from shame and self-consciousness" (Golding 64). Jackson writes, "It isn't fair, it isn't right," Mrs. Hutchinson screamed, and then they were upon her" (Jackson 8). Both lines stress how tenuous moral and ethical constructs can be in light of social forces and the baser human instincts.`
const array = text.split("")

setTimeout(func, 4000)

function type(x) {
  setTimeout(() => {}, Math.random())
  robot.typeString(array[x])
}

function s(x, typeWithSpace) {
  setTimeout(() => {
    robot.typeString(" ");
    setTimeout(() => typeWithSpace(x + 1), 40);
  }, Math.random() * 800);
}

function d(x, typeWithSpace) {
  type(x); setTimeout(() => typeWithSpace(x + 1), 200)
}

function func() {
  function typeWithSpace(x) {
    if (array[x] === " ") {
      s(x, typeWithSpace)
    } else if (array[x] === "." || array[x] === "?") { 
      d(x, typeWithSpace)
    } else {
      type(x);
      if (x < array.length - 1) {
        setTimeout(() => typeWithSpace(x + 1), Math.random());
      }
    }
  }
  typeWithSpace(0);
}