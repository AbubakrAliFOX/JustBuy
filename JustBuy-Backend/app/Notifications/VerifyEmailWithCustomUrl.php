<?php
namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\URL;

class VerifyEmailWithCustomUrl extends VerifyEmail
{
    // protected $verificationUrl;

    // public function __construct($verificationUrl)
    // {
    //     $this->verificationUrl = $verificationUrl;
    // }

    protected function verificationUrl($notifiable)
    {
        $frontendUrl = config('app.frontend_url') . '/email/verify';

        // Generate the signed URL for the API route
        $temporarySignedUrl = URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            ['id' => $notifiable->getKey(), 'hash' => sha1($notifiable->getEmailForVerification())]
        );

        // Replace the backend URL with the frontend URL
        return str_replace(url('/api/email/verify'), $frontendUrl, $temporarySignedUrl);
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject(Lang::get('Verify Email Address'))
            ->line(Lang::get('Please click the button below to verify your email address.'))
            ->action(Lang::get('Verify Email Address'), $this->verificationUrl($notifiable))
            ->line(Lang::get('If you did not create an account, no further action is required.'));
    }
}