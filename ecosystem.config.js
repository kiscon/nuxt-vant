module.exports = {
  apps: [
    {
      name: 'nuxt',
      cwd: './',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      // exec_mode: 'cluster',
      // instances: 4,
      autorestart: true,
      max_memory_restart: '500M',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: './logs/app-err.log',
      out_file: './logs/app-out.log',
      watch_delay: 1000,
      watch: [
        '.nuxt',
        'nuxt.config.js'
      ],
      ignore_watch: [
        'node_modules',
        'logs'
      ],
      env_dev: {
        NODE_ENV: 'development'
      },
      env_test: {
        NODE_ENV: 'test'
      },
      env: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
