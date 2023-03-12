import nltk
from nltk.sentiment import SentimentIntensityAnalyzer


def determine_sentiment(text):
    nltk.download('vader_lexicon')
    # Initialize sentiment analyzer
    sia = SentimentIntensityAnalyzer()
    # Use sentiment analyzer to get polarity scores for text
    polarity_scores = sia.polarity_scores(text)

    # Determine whether sentiment is negative or positive based on compound score
    if polarity_scores['compound'] < 0:
        sentiment = 'negative'
    else:
        sentiment = 'positive'

    # Return sentiment
    return sentiment


def analyze_feedback(module_feedback, additional_indicators):
    # Calculate the average feedback score for the module
    avg_score = sum(module_feedback) / len(module_feedback)

    # Apply additional indicators to the feedback score (e.g. if there were many negative comments)
    if additional_indicators == "negative":
        avg_score = max(1, avg_score - 2)  # decrease score by 2 points (minimum of 1)
    elif additional_indicators == "positive":
        avg_score = min(10, avg_score + 2)  # increase score by 2 points (maximum of 10)

    # Return the adjusted average feedback score
    return avg_score


def clean_review_score(score):
    if score > 100:
        return 100
    elif score < 0:
        return 0
    else:
        return score
