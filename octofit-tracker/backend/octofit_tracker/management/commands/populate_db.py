from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from datetime import timedelta

class Command(BaseCommand):
    help = 'Populate the database with test data for Octofit app'

    def handle(self, *args, **kwargs):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Add test users
        user1 = User.objects.create(username='john_doe', email='john@example.com')
        user2 = User.objects.create(username='jane_doe', email='jane@example.com')

        # Add test teams
        team1 = Team.objects.create(name='Team Alpha')
        team2 = Team.objects.create(name='Team Beta')

        # Add test activities
        Activity.objects.create(user=user1, activity_type='Running', duration=timedelta(minutes=30))
        Activity.objects.create(user=user2, activity_type='Cycling', duration=timedelta(minutes=45))

        # Add test leaderboard entries
        Leaderboard.objects.create(user=user1, score=100)
        Leaderboard.objects.create(user=user2, score=150)

        # Add test workouts
        Workout.objects.create(name='Morning Run', description='A quick morning run')
        Workout.objects.create(name='Evening Yoga', description='Relaxing yoga session')

        self.stdout.write(self.style.SUCCESS('Database populated with test data.'))
