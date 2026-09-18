import type { GuideContent } from "./guides";

// Article text imported from Articles.docx. Publishing notes and placeholder
// bylines are excluded. Only obvious typographical errors were corrected.
export const guideContent: Record<string, GuideContent> = {
  "how-to-track-expenses": {
    "intro": [
      "Most spending doesn’t look important while it is happening. Five dollars here. A quick lunch there. A subscription renewal you notice only because the receipt lands in your inbox. None of it feels heavy. Then the month ends and the total feels strangely unfamiliar.",
      "That is the real reason to learn how to track expenses. Expense tracking is not about watching every purchase with suspicion. It is about giving your memory some help. If you can see what happened, you can make a better decision about what happens next.",
      "Do not begin with a perfect budget. Begin with a record. A budget is a plan for future money. A spending tracker shows what your money has actually been doing. For most beginners, seeing the truth first is easier than trying to design the perfect month in advance."
    ],
    "sections": [
      {
        "id": "start-with-less-information",
        "heading": "Start with less information",
        "paragraphs": [
          "A useful entry can be very small. Record the amount, the date and one category. Add the merchant if it helps you recognise the purchase later. Notes are only useful when the transaction would otherwise look odd, like \"birthday dinner\" or \"work reimbursement\".",
          "Payment method is different from category. Cash, transfer, card or Apple Pay tell you how you paid. Groceries, transport and eating out tell you what the money was spent for. Keeping those ideas separate makes the record much easier to read later.",
          "The Consumer Financial Protection Bureau recommends tracking spending for at least two weeks and preferably a month. A month gives you the fuller picture because bills and less frequent costs have time to appear. But still, seven honest days can teach you more than a complicated system you stop using after three days."
        ]
      },
      {
        "id": "pick-a-rhythm-you-can-keep",
        "heading": "Pick a rhythm you can keep",
        "paragraphs": [
          "There are two practical ways to track spending. Some people record a purchase right after it happens. Others do a short review once a day. Both can work. The important part is choosing the version that requires the least effort from you.",
          "Immediate entry is accurate but it can be annoying when you are rushing. An evening review is calmer but easier to postpone. If you forget details quickly then record purchases at the time. If you hate interrupting your day then give yourself five minutes in the evening and catch up on the spending.",
          "A weekly review is useful but it is usually too late to be your only method. By Sunday, Tuesday's small cash purchase has become \"maybe around ten dollars\". That is how a spending record slowly turns back into a guess."
        ]
      },
      {
        "id": "let-the-first-week-be-messy",
        "heading": "Let the first week be messy",
        "paragraphs": [
          "Do not build twenty categories on day one. Start broad. Housing, bills, groceries, eating out, transport, health, shopping, entertainment, subscriptions and miscellaneous will cover a lot of ordinary life. You can always split a category later when there is a reason.",
          "The first week is really a test of the system. You may notice that cash disappears because you never record it. You may remember card purchases but forget Apple Pay. You may see delivery orders clearly while service fees stay hidden inside the total. That is useful information. It shows where your tracking routine breaks down.",
          "When you miss something, recover what you can from a receipt, notification or purchase history. If the exact category is unclear, put it in miscellaneous and move on. One imperfect entry is not a reason to abandon the whole month."
        ]
      },
      {
        "id": "look-for-repetition-not-guilt",
        "heading": "Look for repetition, not guilt",
        "paragraphs": [
          "At the end of the week, look for what repeated. Which category was bigger than expected? Which purchase happened several times? Which optional expense still felt completely worth it? Those questions are more useful than deciding whether you were \"good\" or \"bad\" with money.",
          "Imagine you spent $6 on coffee four times, $14 on lunch three times and $9 in delivery fees twice. That is $84. The number does not tell you to stop buying coffee or lunch. It simply gives the pattern a price. Maybe the convenience was worth $84. Maybe one part of it was not. Now you can decide with the actual number in front of you.",
          "Consumer.gov suggests writing down what you spend during the month and comparing it with your plan at the end. The order matters. Record first, review second, adjust the next plan after that. Do not edit the record until it looks like the month you wish you had."
        ]
      },
      {
        "id": "add-features-only-when-they-help",
        "heading": "Add features only when they help",
        "paragraphs": [
          "After a few weeks, your daily expenses will start telling you what deserves more detail. Food might need to become groceries and eating out. Transport might need fuel and taxi categories. But only split a category when the new detail helps answer a real question.",
          "The same applies to rules, alerts and automation. They are useful when they remove boring repeated work or warn you about a spending limit you genuinely care about. If they make the system harder to understand, they are just extra furniture."
        ]
      },
      {
        "id": "aim-for-one-truthful-month",
        "heading": "Aim for one truthful month",
        "paragraphs": [
          "A good expense tracking routine will not make every purchase sensible. It will make your spending visible. After one month you should be able to explain where most of your money went and which costs keep returning. That is enough to start making useful changes."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Do I need to track every expense?",
        "answer": "For the first two to four weeks try to capture everything including cash and small purchases. You are building a baseline. Later, fixed recurring costs can take less attention while flexible spending gets the closer look."
      },
      {
        "question": "How long should I track expenses before making a budget?",
        "answer": "A full month is ideal because it catches bills and habits that do not show up every week. If a month feels like too much, start with one or two weeks and treat it as a first sketch."
      },
      {
        "question": "What is the easiest way to track cash spending?",
        "answer": "Record cash purchases when they happen or keep every receipt in one place and check them that evening. Small cash expenses become surprisingly hard to remember after a few days."
      },
      {
        "question": "Is an app better than a spreadsheet?",
        "answer": "Not automatically. A spreadsheet gives you flexibility and a wide view. An app can make recording faster when you are out. The better choice is the one you will actually keep using."
      },
      {
        "question": "What should I do when I forget an expense?",
        "answer": "Use a receipt, notification or transaction history to recover the amount. If you cannot identify the perfect category, use miscellaneous. Keep going."
      }
    ],
    "productNote": "You can use a notebook, spreadsheet or app for this. If you prefer an iPhone expense tracker that does not connect to your bank, our app supports manual entries, categories, rules, search, filters, budgets, alerts, import and export plus supported Apple Pay automation through iOS Shortcuts.",
    "scopeNote": "This article is informed by the Consumer Financial Protection Bureau spending tracker and Consumer.gov budgeting guidance. It is general educational information, not personalized financial advice.",
    "sources": [
      {
        "title": "CFPB: Spending tracker (PDF)",
        "url": "https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_spending_tracker_2018-11_ADA.pdf"
      },
      {
        "title": "CFPB: Track your spending with this easy tool",
        "url": "https://www.consumerfinance.gov/archive/blog/track-your-spending-with-this-easy-tool/"
      },
      {
        "title": "Consumer.gov: Making a budget",
        "url": "https://consumer.gov/your-money/making-budget"
      }
    ]
  },
  "where-does-your-money-go": {
    "intro": [
      "The question \"where does my money go\" often appears near the end of the month when the balance looks smaller than expected. The first instinct is to search for one bad decision. Usually there is no villain. There are just many ordinary purchases that never met each other until the total arrived.",
      "A late breakfast. Two ride fares. A subscription you meant to cancel. Groceries with a few household items mixed in. A quick online order that felt too small to matter. Each one can make sense on its own. The surprise comes from seeing them together.",
      "If you want to track spending in a useful way, you need more than a grand total. You need frequency, timing and context. That is where spending habits and spending patterns become visible."
    ],
    "sections": [
      {
        "id": "start-with-one-normal-month",
        "heading": "Start with one normal month",
        "paragraphs": [
          "Choose the most recent complete month that looks reasonably ordinary. Use card statements, digital wallet history, receipts and whatever notes you have for cash. Do not choose a holiday month or a month with a major move unless that is the period you actually want to study.",
          "The Consumer Financial Protection Bureau suggests looking across several months when you need a realistic picture of spending. One month is a good starting point. Three months is better when your monthly expenses vary or when less frequent costs keep appearing.",
          "Group purchases into broad categories first. Groceries, eating out, transport, shopping, subscriptions, housing, bills, health. Do not spend ten minutes deciding whether one sandwich belongs under lunch or convenience. The goal is to see the shape of the month."
        ]
      },
      {
        "id": "repeated-costs-tell-the-better-story",
        "heading": "Repeated costs tell the better story",
        "paragraphs": [
          "Big purchases get attention because they look serious. Repeated medium sized purchases are easier to miss. A $300 appliance is obvious, a $12 lunch bought fifteen times is $180, but it arrives slowly enough to feel harmless.",
          "Look for repeated merchants but also repeated situations. Three taxi ride charges may all come from late workdays. Delivery might happen whenever the fridge is empty. Convenience store spending may rise near the end of the week. The trigger can be more useful than the merchant name.",
          "This changes the question. Instead of asking why you spent so much, ask what keeps creating the expense. That question gives you something you can actually change."
        ]
      },
      {
        "id": "turn-small-purchases-into-monthly-numbers",
        "heading": "Turn small purchases into monthly numbers",
        "paragraphs": [
          "Frequent spending gets easier to judge when you total it. A $5 coffee bought sixteen times is $80, $8 delivery fee paid seven times is $56, ten convenience store stops at $9 each come to $90. Together that is $226.",
          "The point is not to shame yourself over coffee. Maybe that coffee is the nicest part of your commute. Maybe delivery saves an hour on a difficult evening. The number simply lets the habit compete honestly with other things you could do with the same money.",
          "Annual totals can help too but use them when they add clarity. A $20 monthly subscription costs $240 a year. That can be useful to know. Turning every sandwich into a ten year calculation usually adds drama more than insight."
        ]
      },
      {
        "id": "find-spending-you-barely-notice",
        "heading": "Find spending you barely notice",
        "paragraphs": [
          "The most interesting spending is often not the biggest category. It is the category that feels strangely invisible. You may happily spend a lot on restaurants because you value them. You may spend much less on unused subscriptions and resent every renewal. The smaller number might deserve attention first.",
          "Look for three things. Was the amount expected? Do you remember the purchases? Did they feel worth it? Spending that is high, forgotten and disappointing is a stronger candidate for change than spending that is high, deliberate and enjoyable."
        ]
      },
      {
        "id": "change-the-mechanism-not-your-personality",
        "heading": "Change the mechanism, not your personality",
        "paragraphs": [
          "Once you find a pattern, test one small change. If weekday lunches are expensive because mornings are rushed, prepare lunch twice a week. If delivery fees are the problem, keep one easy meal at home. If subscriptions keep surprising you, review renewal dates once a month.",
          "This works better than promising to become \"more disciplined\". A specific change can be tested. At the end of the next month, compare the result. Did it save time, create annoyance or make no difference at all? Your own data can answer that."
        ]
      },
      {
        "id": "keep-the-answer-simple",
        "heading": "Keep the answer simple",
        "paragraphs": [
          "After the review, you should be able to explain the month in a few sentences. Fixed costs took most of the income. Eating out was higher than expected. Two subscriptions were no longer useful. Transport was expensive but necessary. If you need twenty charts to explain where the money went, the system may be doing more work than the question requires."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Why can I never remember where my money went?",
        "answer": "Memory is good at unusual events and worse at repetition. Small purchases that happen several times a week can disappear from memory even when they add up to a large monthly total."
      },
      {
        "question": "How many months of spending should I review?",
        "answer": "Start with one normal month. Review three months when your income or spending changes a lot or when the first month contains travel, celebrations, repairs or other unusual costs."
      },
      {
        "question": "Should I count transfers to savings as spending?",
        "answer": "Keep savings visible in the budget but separate from ordinary consumption. That way you can see what you spent and what you deliberately set aside."
      },
      {
        "question": "What if one purchase belongs to several categories?",
        "answer": "Split it when the difference is large enough to matter. If a supermarket receipt contains $90 of groceries and a $50 appliance a split makes sense. For a small mixed basket the main category is usually enough."
      },
      {
        "question": "How can I reduce spending without feeling deprived?",
        "answer": "Start with repeated costs that give you little value. Fees, forgotten subscriptions and duplicate purchases are often easier to change than something you genuinely enjoy."
      }
    ],
    "productNote": "You do not need to connect every financial account to understand your spending. If you prefer to keep the process manual, our private iPhone expense tracker can help you search repeated merchants, filter categories and export your own records without linking a bank account.",
    "scopeNote": "The review method is informed by Consumer Financial Protection Bureau guidance on assessing spending and its spending tracker. The examples are illustrative and are not promises of savings or personalized financial recommendations.",
    "sources": [
      {
        "title": "CFPB: Assess your spending",
        "url": "https://www.consumerfinance.gov/owning-a-home/prepare/assess-your-spending/"
      },
      {
        "title": "CFPB: Spending tracker (PDF)",
        "url": "https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_spending_tracker_2018-11_ADA.pdf"
      }
    ]
  },
  "budget-categories": {
    "intro": [
      "A new budget can become complicated very quickly. Coffee separates from restaurants. Streaming separates from entertainment. Toiletries separate from household supplies even though all of them were bought in the same store.",
      "A week later the budget category list has thirty lines. Half are almost empty, then one category called \"Other\" quietly contains everything that did not fit the plan.",
      "Good budget categories are simpler than that, they are not a catalogue of everything you might buy, they are a way to answer useful questions about a monthly budget. If a category does not help you understand or change something, it probably does not need to exist."
    ],
    "sections": [
      {
        "id": "start-broad",
        "heading": "Start broad",
        "paragraphs": [
          "A simple set of expense categories can cover housing, household bills, groceries, eating out, transport, health, personal purchases, entertainment, subscriptions, debt payments, savings and miscellaneous. The names can change, the point is to separate spending that behaves differently.",
          "Groceries and eating out are both food but they usually come from different decisions. Transport may be mostly fixed for someone with a car payment and very flexible for someone using public transport and taxi. Savings deserves its own place because money set aside for later should not disappear inside whatever remains at the end of the month.",
          "The Consumer Financial Protection Bureau uses categories such as housing, utilities, food, transportation, health, debt, savings and personal spending in its spending tracker. It also separates needs and obligations from wants. That framework is useful but real life is rarely neat enough to follow it perfectly."
        ]
      },
      {
        "id": "make-a-category-earn-its-place",
        "heading": "Make a category earn its place",
        "paragraphs": [
          "Create separate spending categories when the split could change a decision. If you want to know whether restaurant spending is pushing groceries out of the budget, separate them. If taxi fee seems expensive, split it from public transport for a month and see what the difference actually is.",
          "Do not split things just because you can. Coffee, bakery and lunch can all stay under eating out unless one of them is the habit you are trying to understand. Every extra category creates another choice during entry. Too many choices make tracking slower and less consistent."
        ]
      },
      {
        "id": "payment-method-is-not-a-category",
        "heading": "Payment method is not a category",
        "paragraphs": [
          "Cash, debit card, transfer, credit card and Apple Pay explain how you paid. They do not explain what you bought. Keep payment method in its own field if you need it. The category should describe the purpose of the expense.",
          "Merchant names can be misleading too. A supermarket can sell groceries, medicine, kitchen tools and a birthday card. Automatic rules are handy when they get the common case right, but they should be easy to correct when a purchase does not fit."
        ]
      },
      {
        "id": "do-not-overthink-mixed-purchases",
        "heading": "Do not overthink mixed purchases",
        "paragraphs": [
          "Split a mixed purchase when the difference is meaningful. A $140 supermarket bill with $90 of groceries and a $50 appliance is worth splitting. A $28 basket with toothpaste, fruit and paper towels probably does not need forensic analysis.",
          "Consistency matters more than tiny accuracy. You could decide to split secondary items only when they are over $25. The exact threshold is personal. What matters is having a rule that does not change depending on how patient you feel that day."
        ]
      },
      {
        "id": "make-categories-fit-your-life",
        "heading": "Make categories fit your life",
        "paragraphs": [
          "A student may need tuition, books and campus transport. A parent may need childcare and school costs. A freelancer may need personal and business expenses kept apart. Someone who travels often may want one temporary travel category instead of scattering flights, hotels and local transport across the rest of the month.",
          "Irregular costs deserve a place too. Insurance, gifts, repairs, professional fees and travel may not happen every month. They are still real. Some people keep a separate planning category for them. Others set aside a monthly amount so the cost is less disruptive when it arrives."
        ]
      },
      {
        "id": "let-miscellaneous-exist",
        "heading": "Let miscellaneous exist",
        "paragraphs": [
          "Miscellaneous is not a failure. Life contains purchases that do not deserve a permanent category. The problem starts when miscellaneous becomes one of the largest totals in the budget.",
          "Review it at the end of the month. A key copy and a luggage strap can stay there. Six pet related purchases probably deserve their own category. The goal is not to eliminate ambiguity. It is to stop ambiguity from hiding a pattern."
        ]
      },
      {
        "id": "review-the-list-after-a-month",
        "heading": "Review the list after a month",
        "paragraphs": [
          "After one full month remove categories you did not use. Merge the ones that always move together. Split only the categories that hide something you actually wanted to know. A good system often gets shorter as it gets better.",
          "Budget categories should give your spending a readable shape. You should be able to glance at the month and understand the big commitments, the flexible choices and the money set aside for later. When the category system needs more attention than the spending itself, simplify it."
        ]
      }
    ],
    "faqs": [
      {
        "question": "How many budget categories should I have?",
        "answer": "There is no perfect number. Many beginners can manage roughly eight to twelve broad categories. Add more only when the extra detail helps you make a decision."
      },
      {
        "question": "Should savings be a budget category?",
        "answer": "Yes, if you want savings to be visible in the monthly budget. Treat it as money deliberately set aside instead of waiting to see what remains."
      },
      {
        "question": "Should debt payments have their own category?",
        "answer": "Usually yes when they are a meaningful monthly obligation. Keeping them separate makes the required payment visible and avoids mixing it with the original purchase category."
      },
      {
        "question": "Is miscellaneous a bad budget category?",
        "answer": "No, a small miscellaneous category is practical. It becomes less useful when repeated expenses hide inside it month after month."
      },
      {
        "question": "When should I create a subcategory?",
        "answer": "Create one when the split reveals a pattern, supports a goal or answers a question you care about. Detail for its own sake is rarely worth the extra work."
      }
    ],
    "productNote": "A good category system should almost disappear once it is set up. Our private iPhone expense tracker lets you create your own categories and rules, correct classifications, search and filter records and export your data without linking a bank account.",
    "scopeNote": "Category examples and the needs, obligations and wants framework are informed by the Consumer Financial Protection Bureau spending tracker and Consumer.gov budget guidance. Category design is personal and should reflect actual circumstances.",
    "sources": [
      {
        "title": "CFPB: Spending tracker (PDF)",
        "url": "https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_spending_tracker_2018-11_ADA.pdf"
      },
      {
        "title": "Consumer.gov: Making a budget",
        "url": "https://consumer.gov/your-money/making-budget"
      }
    ]
  },
  "weekly-vs-monthly-budgeting": {
    "intro": [
      "Monthly budgets make sense on paper because rent, subscriptions and many bills arrive by the month. Daily life does not always cooperate. By the second Friday, a generous looking restaurant budget can already feel much smaller.",
      "That is why weekly vs monthly budgeting is not really a contest. A monthly budget shows the whole picture. A weekly budget is often better at controlling the pace of flexible spending.",
      "The useful question is not which one is better for everyone. It is which one matches the kind of decision you are trying to make."
    ],
    "sections": [
      {
        "id": "what-a-monthly-budget-does-well",
        "heading": "What a monthly budget does well",
        "paragraphs": [
          "A monthly budget works well for income and costs that naturally belong to the month. Housing, utilities, subscriptions, debt payments, savings and insurance are easier to see together. It gives you one view of whether expected income can cover expected obligations.",
          "Consumer.gov describes a budget as a written plan for how money will be spent each month. It also recommends recording spending and reviewing the result at the end of the month. That structure works because many financial commitments are already organized around dates.",
          "The weakness is distance. A $700 spending limit for eating out and entertainment can look generous on day five. By day twenty five, it may be almost gone. The monthly number is correct but the feedback arrived late."
        ]
      },
      {
        "id": "what-a-weekly-budget-does-well",
        "heading": "What a weekly budget does well",
        "paragraphs": [
          "A weekly budget brings flexible spending closer. Groceries, eating out, fuel, taxi, entertainment and personal purchases are often easier to pace across seven days. You get a signal while there is still time to adjust.",
          "The Consumer Financial Protection Bureau also publishes a cash flow budget that tracks balances week by week. That matters when income and bills do not arrive at the same time. Someone can have enough money for the month overall and still have a difficult week because the timing is awkward.",
          "Weekly budgeting has its own weakness. A large grocery trip, a birthday or a quarterly bill can make one week look terrible even when the month is fine. Weeks are useful guides. They are not all supposed to look identical."
        ]
      },
      {
        "id": "do-not-divide-the-month-by-four",
        "heading": "Do not divide the month by four",
        "paragraphs": [
          "A year has 52 weeks. Divide that by 12 months, you get about 4.33 weeks per month. This number matters when you convert a spending limit into a weekly limit.",
          "Suppose your monthly flexible spending limit is $800. Dividing by four gives $200 a week. Over 52 weeks that becomes $10,400. The original monthly plan allows $9,600 over a year. Divide $800 by 4.33, the weekly figure is about $185. That stays much closer to the plan.",
          "You do not have to use $185 as a ceiling. Some people prefer a weekly guide with a small buffer left at the monthly level. Others let unused money roll into the next week. The important part is knowing that four weeks is not an average month."
        ]
      },
      {
        "id": "use-both-when-both-are-useful",
        "heading": "Use both when both are useful",
        "paragraphs": [
          "For many people, the cleanest system is monthly for commitments and weekly for flexible spending. Start with monthly take home income. Subtract fixed bills, planned savings, debt payments and money reserved for irregular costs. What remains is the flexible pool.",
          "You can divide that pool by 4.33 or by the number of spending weeks before the next pay date. Keep some room for costs that are real but uneven. This is where a small monthly buffer helps.",
          "Imagine $1,200 remains after fixed commitments. You might keep $150 as a monthly buffer and use the remaining $1,050 as the flexible pool. Divided by 4.33, that is about $242 per week. A bigger grocery trip does not automatically mean the week failed because the buffer was part of the plan."
        ]
      },
      {
        "id": "match-the-rhythm-to-your-pay",
        "heading": "Match the rhythm to your pay",
        "paragraphs": [
          "Someone paid weekly may naturally think in weekly limits. Someone paid twice a month may prefer two spending periods. A person with irregular income may need to focus first on money already available and upcoming bills rather than an average monthly figure.",
          "The budget period should reduce uncertainty. If monthly limits keep disappearing early, shorten the feedback loop. If a weekly budget makes normal variation feel like failure, widen the period or add a buffer. A budget is useful when it helps you see decisions sooner."
        ]
      },
      {
        "id": "check-weekly-review-monthly",
        "heading": "Check weekly, review monthly",
        "paragraphs": [
          "A short weekly check can answer a few practical questions. Is flexible spending still on pace? Is there an unusual cost coming in the next seven days? The monthly review can then look at the larger picture of income, bills, savings and category totals.",
          "This avoids two extremes. You do not need to stare at every transaction with alarm. You also do not need to wait until the month is over to discover that the plan stopped working two weeks ago."
        ]
      }
    ],
    "faqs": [
      {
        "question": "Is a weekly budget better than a monthly budget?",
        "answer": "A weekly budget is often better for pacing flexible spending. A monthly budget is better for seeing income, bills, savings and the full plan. Many people find the combination easier than choosing only one."
      },
      {
        "question": "How do I convert a monthly budget to a weekly budget?",
        "answer": "Divide the monthly amount by about 4.33. That comes from 52 weeks divided by 12 months. Dividing by four usually creates a weekly number that is too high for the original annual plan."
      },
      {
        "question": "What should I do in a five week month?",
        "answer": "Use the same 4.33 approach across the year or keep a monthly buffer. The fifth week is not free money. It is one reason simple division by four causes problems."
      },
      {
        "question": "Should unused weekly budget roll over?",
        "answer": "It can. Rollover gives you more flexibility and lets a lower spending week create room for the next one. A fixed reset gives clearer limits. Pick the rule before the money is sitting there waiting to be reclassified."
      },
      {
        "question": "Can weekly budgeting work with irregular income?",
        "answer": "Yes, but be careful with income that has not arrived yet. A cash flow budget is more useful when it starts with money currently available and known upcoming obligations."
      }
    ],
    "productNote": "If you prefer to manage both rhythms in one place, our private iPhone expense tracker supports weekly alerts, monthly budgets and searchable records without requiring a bank connection.",
    "scopeNote": "Monthly budgeting guidance is informed by Consumer.gov. The week by week cash flow method is informed by the Consumer Financial Protection Bureau cash flow budget tool. Calculations are illustrative and should be adapted to actual income and obligations.",
    "sources": [
      {
        "title": "Consumer.gov: Making a budget",
        "url": "https://consumer.gov/your-money/making-budget"
      },
      {
        "title": "CFPB: Creating a cash flow budget (PDF)",
        "url": "https://files.consumerfinance.gov/f/documents/cfpb_your-money-your-goals_cash_flow_budget_tool_2018-11_ADA.pdf"
      }
    ]
  }
};
