declare interface Window {
  ENV: EnvSettings;
}

interface EnvSettings {
  ENV?: 'development' | 'staging' | 'production';
}
