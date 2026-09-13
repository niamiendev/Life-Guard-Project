from django.contrib import admin

# Register your models here.
class AlertAdmin(admin.ModelAdmin):
    list_display = [
        "id",
        "emergency_type",
        "status",
        "longitude",
        "latitude",
        "created_at",
        "updated_at"
    ]

    list_filter = [
        "status",
        "emergency"
    ]

    search_fields = [
        "user__username",
        "user__email"
    ]
